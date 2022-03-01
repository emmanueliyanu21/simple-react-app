import { authHeader } from "../helpers/authHeaders"

export const axiosConfig = () =>{ 
    return {
      headers: {
         ...authHeader(),
        "Content-Type": "application/json",
      },
    }};

    export const requestStatus  ={
        success: "success",
        failed: "failed",
    }
