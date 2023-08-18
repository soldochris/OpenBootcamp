import axios from "axios";

export const getAllNotes = () => {
  return axios.get('https://sheltered-hamlet-57841-9cceac2993ca.herokuapp.com/api/notes')
  .then((response) => {
    const {data} = response;
    return data;
  });
}