const Header = ({ text, sub }) => {
  if (sub) {
    return (
      <h2>{text}</h2>
    )
  } else {
    return (
      <h1>{text}</h1>
    )
  }
}

export default Header