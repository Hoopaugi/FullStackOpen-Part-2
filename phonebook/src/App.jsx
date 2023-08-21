import { useState } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
  
    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')

      return null
    }

    const person = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(person))
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

  const personsToShow = filter !== '' ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <PersonForm onSubmit={addPerson} onNameChange={handleNameChange} onNumberChange={handleNumberChange} name={newName} number={newNumber} />
      <Persons persons={personsToShow} />
    </>
  )
}

export default App