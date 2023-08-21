import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const person = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (person) {
      // eslint-disable-next-line no-restricted-globals
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedPerson = { ...person, number: newNumber }

        personsService
          .update(person.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== response.data.id ? person : updatedPerson))
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      personsService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
  
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleRemove = (id) => {
    personsService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const personsToShow = filter !== '' ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <PersonForm onSubmit={addPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange} name={newName} number={newNumber} />
      <Persons persons={personsToShow} handleRemove={handleRemove}/>
    </>
  )
}

export default App