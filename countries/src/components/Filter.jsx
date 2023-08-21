const Filter = ({ filter, onChange }) => {
  return (
    <>
      find countries <input
        value={filter}
        onChange={onChange}
      />
    </>
  )
}

export default Filter
