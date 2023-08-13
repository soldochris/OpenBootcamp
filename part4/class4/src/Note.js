export const Note = ({title,body}) => {

  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}