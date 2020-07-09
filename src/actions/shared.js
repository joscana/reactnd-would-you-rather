import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID='sarahedo'

export function handleInitialData () { 
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
            return _getQuestions()
        })
        .then((questions) => {
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}