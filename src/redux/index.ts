import {createStore} from "redux"
import {registrationReducer} from "./reducer/registration";

export const store = createStore(registrationReducer)