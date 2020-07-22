import { showLoading, hideLoading } from "react-redux-loading"
import { _saveQuestion } from '../utils/_DATA'
import { _saveQuestionAnswer } from '../utils/_DATA'
import { addQuestionToUser, addAnswerToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (optionOneText, optionTwoText, author) {
    return (dispatch) => {
        dispatch(showLoading())

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
        .then((question) =>  {
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(author, question.id))
        })
        .then(() => dispatch(hideLoading()))
    }
}


export function receiveQuestions (questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function saveAnswer (authedUser, qid, answer) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveAnswer (authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
        .then(() => {
            dispatch(saveAnswer(authedUser, qid, answer))
            dispatch(addAnswerToUser(authedUser, qid, answer))
        })
    }
   
}