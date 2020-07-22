import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER: {

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
        }
        case ADD_ANSWER_TO_USER : {
            const {userId, questionId, answer} = action

            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    answers: { 
                        ...state[userId].answers,
                        [questionId]: answer
                    }
                },
            }
        }
        default :
            return state
    }
}