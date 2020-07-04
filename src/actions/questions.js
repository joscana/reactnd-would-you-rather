import { showLoading, hideLoading } from "react-redux-loading"
import { _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SELECT_ANSWER = 'SELECT_ANSWER'

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion (text, optionOne, optionTwo) {
    return (dispatch, getState) => {
        dispatch(showLoading())

        return _saveQuestion({
            text,
            optionOne,
            optionTwo
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}


export function receiveQuestions (questions) {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}