import { sendLoginConstants } from "../constant/sendLogin";
import { sendLoginService } from "../service/sendLogin";

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

  function request (formdata) { return { type: sendLoginConstants.SENDLogin_REQUEST, formdata } }
  function success (loginDetails) { return { type: sendLoginConstants.SENDLogin_SUCCESS, loginDetails } }
  function failure (error) { return { type: sendLoginConstants.SENDLogin_ERROR, error } }
}


export const loginAction = {
  sendLoginDetails
}