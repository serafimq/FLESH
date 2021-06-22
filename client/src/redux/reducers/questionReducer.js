import { ADD_QUEST, SET_USER_QUEST, EDIT_QUEST, SET_QUEST } from "../types/questionTypes"


const questionReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUEST:
      return action.payload

    case SET_USER_QUEST:
      return action.payload

    case ADD_QUEST:
      return [...state, action.payload]

    case EDIT_QUEST:
      return state.map(question => {
        if (question._id === action.payload._id) {
          return action.payload
        }
        return question
      })

    default:
      return state;
  }
}

export default questionReducer
