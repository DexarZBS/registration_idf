import React, {useState} from 'react';
import InputMask from 'react-input-mask';

const SignUpInfo = () => {
    return (
        <form className="form-container">
            <div>
                <label htmlFor="phoneInput">Mobile phone</label>
                <InputMask placeholder="Type your mobile phone number" mask="+375\ 99 999 99 99"/>
                <label htmlFor="emailInput">Email</label>
                <input placeholder="Type your email" id="emailInput" type='email'/>
                <label htmlFor="passwordInput">Password</label>
                <input placeholder="Type your password" id="passwordInput" type="password"/>
                <label htmlFor="repeatPasswordInput">Repeat password</label>
                <input placeholder="Type your repeat password" id="repeatPasswordInput" type="password"/>
            </div>
            <div className="button-container">
                <button>Next</button>
            </div>
        </form>
    );
};

export default SignUpInfo;