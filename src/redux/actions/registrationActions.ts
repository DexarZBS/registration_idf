import {RegistrationActionType} from "../../types/retistrationTypes";

export const setSignUpAction = (phone: string, email: string, password: string) => ({
     type: RegistrationActionType.SET_SIGN_UP_INFO,
     payload: {
         phone, email, password
     }
 })


export const setPersonaInfoAction = (firstName:string, lastName:string,sex:string,birthday:string,favoriteOcean:string,hobby:string[]) => ({
    type:RegistrationActionType.SET_PERSONAL_INFO,
    payload:{
        firstName,
        lastName,
        sex,
        birthday,
        favoriteOcean,
        hobby
    }
})

export const changeSignUpFormAction = () => ({
    type: RegistrationActionType.TO_SIGN_UP_FORM
})