import { MOVIES_LIST } from "../types";
import axios from 'axios';
                    
export const getMovies = () => {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  const response = axios.get(url)
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
  return {
    type: MOVIES_LIST,
    payload: response
  }  
}
