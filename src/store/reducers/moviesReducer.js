import { MOVIES_LIST } from "../types";

export default function moviesReducer(state = null, action) {
  switch (action.type) {
    case MOVIES_LIST:
      return action.payload;
    default:
      return state;
  }
}