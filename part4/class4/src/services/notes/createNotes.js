import axios from "axios"

export const createNote = ({title, body}) => {
  return axios.post('http://localhost:3001/api/notes/', {title, body} )
  .then( response => {
    const {data} = response;
    return data;
  });
}