import {TypedUseSelectorHook, useSelector} from "react-redux";
import {registrationState} from "./redux/reducer";

export const useTypeSelector: TypedUseSelectorHook<registrationState>=useSelector