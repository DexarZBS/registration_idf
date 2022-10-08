export interface IRegistrationState {
    signUpInfo:{
        phone:string;
        email:string;
        password:string;
    }
    personalInfo:{
        firstName:string;
        lastName:string;
        sex:string;
        birthday:string;
        favoriteOcean:string;
        hobby:string;
    }
}

export enum RegistrationActionType {
    SET_SIGN_UP_INFO = "SET_SIGN_UP_INFO",
    SET_PERSONAL_INFO = 'SET_PERSONAL_INFO'
}

interface ISetSignUpInfo {
    type: RegistrationActionType.SET_SIGN_UP_INFO
    payload: {phone:string, email:string, password:string}
}

interface ISetPersonalInfo {
    type: RegistrationActionType.SET_PERSONAL_INFO
    payload: {firstName:string, lastName:string,sex:string,birthday:string,favoriteOcean:string,hobby:string}
}

export type RegistrationActionTypes = ISetSignUpInfo | ISetPersonalInfo