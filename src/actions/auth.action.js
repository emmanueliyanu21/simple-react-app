import { sendLoginConstants } from "../constants/sendLogin";
import { sendLoginService } from "../services/sendLogin";

function sendLoginDetails(formdata) {
    return async dispatch => {
        dispatch(request(formdata))
        console.log(formdata)
        try {
          const loginDetails = await sendLoginService.sendLogin(formdata)
          console.log(loginDetails)
          dispatch(success(loginDetails))
          return loginDetails;
            
      } catch (error) {
          dispatch(failure(error.toString()))
          return error?.response;
      }
    }

  function request (formdata) { return { type: sendLoginConstants.SENDLOGIN_REQUEST, formdata } }
  function success (loginDetails) { return { type: sendLoginConstants.SENDLOGIN_SUCCESS, loginDetails } }
  function failure (error) { return { type: sendLoginConstants.SENDLOGIN_ERROR, error } }
}


export const loginAction = {
  sendLoginDetails
}