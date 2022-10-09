import React, {useRef, useState} from 'react';
import InputMask from 'react-input-mask';
import {functionCompare} from "../validation/validation";
import {useDispatch} from "react-redux";
import {setSignUpAction} from "../redux/actions/registrationActions";
import {schema} from "../validation/schema";

interface IRefs {
    value: string,
    checkField: 'mobilePhone' | 'email' | 'password',
    error: boolean
}


const SignUpInfo = () => {
    const [error, setError] = useState(false)

    const phoneRef = useRef<IRefs | null>(null)
    const emailRef = useRef<IRefs | null>(null)
    const passwordRef = useRef<IRefs | null>(null)
    const passwordCheckRef = useRef<IRefs | null>(null)

    const dispatch = useDispatch()

    const submitForm = () => {
        const refsArray: Array<React.MutableRefObject<IRefs | null>> = [phoneRef, emailRef, passwordRef, passwordCheckRef];
        let validData = refsArray.reduce((acc, element) => {
            if (acc) {
                return element?.current?.checkField ? !!functionCompare(element?.current?.value, schema[element?.current?.checkField]) : false
            } else return acc
        }, true)
        if (!validData){
            setError(true);
            return
        }
        if (phoneRef.current && emailRef.current && passwordRef.current) {
            passwordRef.current?.value === passwordCheckRef.current?.value ?
                dispatch(setSignUpAction(phoneRef.current.value, emailRef.current.value, passwordRef.current.value))
                : alert('invalid checkPassword')
        }
    }

    return (
        <form className="form-container" onSubmit={(e) => {
            e.preventDefault();
            submitForm()
        }}>
            <div className="signup-inputs-container">
                <InputMask className={error ?'error-value' : undefined} placeholder="Type your mobile phone number" mask="+375\ 99 999 99 99"
                           onChange={(event) => {
                               phoneRef.current = {
                                   value: event.target.value.replace(/\s/g, ''),
                                   checkField: 'mobilePhone',
                                   error: false,
                               }
                               setError(false)
                           }}/>
                <input className={error ?'error-value' : undefined} placeholder="Type your email" id="emailInput" type='email'
                       onChange={(event) => {
                           emailRef.current = {
                               value: event.target.value,
                               checkField: 'email',
                               error: false,
                           }
                           setError(false)
                       }}/>
                <input className={error ?'error-value' : undefined} placeholder="Type your password" id="passwordInput" type="password"
                       onChange={(event) => {
                           passwordRef.current = {
                               value: event.target.value,
                               checkField: 'password',
                               error: false,
                           }
                           setError(false)
                       }}/>
                <input className={error ?'error-value' : undefined} placeholder="Repeat your password" id="repeatPasswordInput" type="password"
                       onChange={(event) => {
                           passwordCheckRef.current = {
                               value: event.target.value,
                               checkField: 'password',
                               error: false,
                           }
                           setError(false)
                       }}/>
            </div>
            <div className="button-container">
                <button>Next</button>
            </div>
        </form>
    );
};

export default SignUpInfo;