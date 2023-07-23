import React from 'react'
import ReactDOM from 'react-dom'

/** short form to create the component Header
 *  const Header = ({course}) => <h1>{course}</h1>
 */

const App = () => {
  const Course = "Half Stack application develpment";
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{Course}</h1>
      <p>{parts[0].name}: {parts[0].exercises}</p>
      <p>{parts[1].name}: {parts[1].exercises}</p>
      <p>{parts[2].name}: {parts[2].exercises}</p>
      <p>Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))