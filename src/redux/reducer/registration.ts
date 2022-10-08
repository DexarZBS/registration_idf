import {IRegistrationState, RegistrationActionType, RegistrationActionTypes} from "../../types/retistrationTypes";

const initState: IRegistrationState = {
    signUpInfo:{
        phone: '',
        email:'',
        password:'',
    },
    personalInfo:{
        firstName:'',
        lastName:'',
        sex:'',
        birthday:'',
        favoriteOcean:'',
        hobby:'',
    }
}

export const registrationReducer = (state: IRegistrationState = initState, action:RegistrationActionTypes) => {
    switch (action.type) {
        case RegistrationActionType.SET_SIGN_UP_INFO: return {
            ...state,
            signUpInfo:action.payload
        }
        case  RegistrationActionType.SET_PERSONAL_INFO: return {
            ...state,
            personalInfo: action.payload
        }
        default: return state;
    }
}