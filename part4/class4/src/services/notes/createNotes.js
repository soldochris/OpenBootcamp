import axios from "axios"

export const createNote = ({title, body}) => {
  return axios.post('https://sheltered-hamlet-57841-9cceac2993ca.herokuapp.com/api/notes', {title, body} )
  .then( response => {
    const {data} = response;
    return data;
  });
}