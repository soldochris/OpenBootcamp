export const Course = ({course}) => {

  let total = 0;
  for (let i = 0;i < course.parts.length; i++){
    total += course.parts[i].exercises;
  }

  return (
    <div>
      <strong>{course.id}</strong>
      <h2>{course.name}</h2>
      <ol>
        {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      </ol>
      <strong>Total of {total} exercises</strong>
    </div>
  )
}