import React from 'react';

const PersonalInfo = () => {
    return (
        <form className="form-container">
            <div className='input-container'>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" type="text" placeholder="First name"/>
                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" type="text" placeholder="Last name"/>
            </div>
            <div className='form-container__radio-buttons'>
                <p>Sex:</p>
                <input type='radio' id='sexInput1' name="sexRadio" value="male"/>
                <label htmlFor="sexInput1">Male</label>
                <input type='radio' id='sexInput2' name="sexRadio" value="female"/>
                <label htmlFor="sexInput2">Female</label>
            </div>
            <div className='input-container flex-inputs'>
                <label htmlFor="birthday">Birthday:</label>
                <input className='day-birthday' id="birthday" type="number" placeholder="DD"/>
                <input className='month-birthday' id="birthday" type="number" placeholder="MM"/>
                <input className='year-birthday' id="birthday" type="number" placeholder="YYYY"/>
            </div>
            <select>
                <option></option>
            </select>
            <div>

            </div>
            <div className='button-container'>
                <button>Change SignUp Information</button>
                <button>Complete</button>
            </div>

        </form>
    );
};

export default PersonalInfo;