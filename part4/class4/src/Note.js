export const Note = ({content,date,categories = []}) => {

  return (
    <div>
      <small>{date}</small>
      <p>{content}</p>
      <ul>
        {categories.map((category) => {
          return <li key="category">{category}</li>
        })}
      </ul>
    </div>
  )
}