import { combineReducers } from "redux";
import { orderDetails } from "./orders.reducer";
import { loginDetails } from "./auth.reducer";

const rootReducer = combineReducers({
    orderDetails,
    loginDetails
});

export default rootReducer;