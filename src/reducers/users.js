import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:

            const {userId, questionId} = action

            let user = {
                [userId]: {
                    ...state[userId],
                    questions: state[userId].questions.concat([questionId])
                }
            }

            return {
                ...state,
                ...user,
            }
        default :
            return state
    }
}