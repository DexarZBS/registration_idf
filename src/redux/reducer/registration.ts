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
        hobby:[],
    },
     selectPage:'signUpForm',
}

export const registrationReducer = (state: IRegistrationState = initState, action:RegistrationActionTypes):IRegistrationState => {
    switch (action.type) {
        case RegistrationActionType.SET_SIGN_UP_INFO: return {
            ...state,
            signUpInfo:action.payload,
            selectPage:'personalForm',
        }
        case  RegistrationActionType.SET_PERSONAL_INFO: return {
            ...state,
            personalInfo: action.payload,
            selectPage:'result',
        }
        case RegistrationActionType.TO_SIGN_UP_FORM: return {
            ...state,
            selectPage: "signUpForm"
        }
        default: return state;
    }
}