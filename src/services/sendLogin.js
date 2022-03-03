import axios from "axios"
import { config } from '../config'

export const sendLoginService = {
    sendLogin,
}

async function sendLogin(formdata) {
    const requestOptions = {
        headers: {"Accept":"application/json"}
    }
    console.log(formdata)
    const response = await axios.post(`${config.testUrl}/login`, formdata, requestOptions)
    const auth = response.data

    if(auth.status === true){
        sessionStorage.setItem('token', JSON.stringify(auth?.data?.token))
        sessionStorage.setItem('user',JSON.stringify(auth?.data))
        sessionStorage.setItem('isAuthenticated',true)
    }
    else {
        
    }

    return response;
}