import { ALL_USERS, SET_USER } from "../types/userTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case ALL_USERS:
      return [...action.payload]
    default:
      return state;
  }
}

export default userReducer
