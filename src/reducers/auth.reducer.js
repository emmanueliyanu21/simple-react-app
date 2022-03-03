import {sendLoginConstants} from "../constants/sendLogin"

const initState = {}
export const loginDetails =  (state = initState, action ) => {
    switch(action.type) {
        case sendLoginConstants.SENDLOGIN_REQUEST:
            return {
                loading: true
            }
        case sendLoginConstants.SENDLOGIN_SUCCESS:
            return {
                sendLogin: action.payload
            }
        case sendLoginConstants.SENDLOGIN_ERROR:
            return {
                error: action.error
            }
            default:
                return state
        }
}