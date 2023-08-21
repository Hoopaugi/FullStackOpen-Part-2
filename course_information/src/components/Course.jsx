import Header from "./Header"

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, current) => acc + Number.parseInt(current.exercises), 0)

  return (
    <b>total of {total} exercises</b>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} sub={true} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Course
