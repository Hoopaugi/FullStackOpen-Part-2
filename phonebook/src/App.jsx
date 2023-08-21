import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
  
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is alreadyadded to phonebook`)
      setNewName('')
      return null
    }

    const person = {
      name: newName
    }

    setPersons(persons.concat(person))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
        <br />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App