import { combineReducers } from 'redux';
import movies from "./moviesReducer";

export default function rootReducer() {
  return combineReducers({
    movies
  })
}
