const Person = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map(person => <Person key={person.id} person={person} />)}
        </tbody>
      </table>
    </>
  )
}

export default Persons
