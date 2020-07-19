import { showLoading, hideLoading } from "react-redux-loading"
import { _saveQuestion } from '../utils/_DATA'
import { addQuestionToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SELECT_ANSWER = 'SELECT_ANSWER'

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