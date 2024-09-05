import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import { uiReducer } from "./uiReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    dataReducer,
    uiReducer,
    loginReducer,
});

export default rootReducer;