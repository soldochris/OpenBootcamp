import React from 'react'
import ReactDOM from 'react-dom'

/** short form
 *  const Header = ({course}) => <h1>{course}</h1>
 */
const Header = (props) =>{
  return <h1>{props.course}</h1>
}

const Part = (props) =>{
  return <p>{props.part}: {props.exercises}</p>
}

const Content = (props) =>{
  return (
    <div>
      <Part part="Fundamentals of React" exercises="10"/>
      <Part part="Using props to pass data" exercises="7"/>
      <Part part="State of a component" exercises="14"/>
    </div>
  )
}

const Total = (props) =>{
  return <p>Number of exercises: {props.total}</p>
}

const App = () => {

  return (
    <div>
      <Header course="Half Stack application development" />
      <Content />
      <Total total="37" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))