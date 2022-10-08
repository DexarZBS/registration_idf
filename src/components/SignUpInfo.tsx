import React from 'react';
import InputMask from 'react-input-mask';

const SignUpInfo = () => {
    return (
        <div>
            <form className="form-container">
                <InputMask mask="+375\ 99 999 99 99"/>
                <input type='email'/>
                <input type="password"/>
                <input type="password"/>
                <button>Next</button>
            </form>
        </div>
    );
};

export default SignUpInfo;