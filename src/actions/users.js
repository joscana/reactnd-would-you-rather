export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

export function receiveUsers (users) {
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionToUser(userId, questionId) {
    return  {
        type: ADD_QUESTION_TO_USER,
        userId,
        questionId
    }
}

export function addAnswerToUser(userId, questionId, answer) {
    return  {
        type: ADD_ANSWER_TO_USER,
        userId,
        questionId,
        answer
    }
}