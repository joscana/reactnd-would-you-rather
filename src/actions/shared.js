import { _getUsers } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'sarahedo'

export function handleInitialData () { 
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}