import React, {useState} from 'react';
import {schema} from "../validation/schema";
import {functionCompare} from "../validation/validation";
import {changeSignUpFormAction, setPersonaInfoAction} from "../redux/actions/registrationActions";
import {useDispatch} from "react-redux";


const oceans: any[] = schema['ocean']['oneOf']
const hobbys: any[] = schema['hobby']['anyOf']

interface IPersonalInfo {
    firstName: {
        value: string,
        checkField: string,
    },
    lastName: {
        value: string,
        checkField: string,
    },
    sex: {
        value: string,
        checkField: string,
    },
    birthDay: {
        day: string,
        month: string,
        year: string,
        checkField: string;
    }
    ocean: {
        value: string,
        checkField: string,
    },
    hobby: {
        value: string[],
        checkField: string,
    },
}

type checkFieldType = 'firstName' | 'lastName' | 'sex' | 'birthday' | 'ocean' | 'hobby';

const PersonalInfo = () => {
    const [error, setError] = useState(false)
    const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
        firstName: {
            value: '',
            checkField: 'firstName',
        },
        lastName: {
            value: '',
            checkField: 'lastName',
        },
        sex: {
            value: '',
            checkField: 'sex',
        },
        birthDay: {
            day: '',
            month: '',
            year: '',
            checkField: 'birthday',
        },
        ocean: {
            value: 'Atlantic',
            checkField: 'ocean',
        },
        hobby: {
            value: [],
            checkField: 'hobby',
        },
    })

    const dispatch = useDispatch();

    const changeHandler = (value: string, type: "firstName" | "lastName" | "sex" | "ocean") => {
        setPersonalInfo(previousState => ({...previousState, [type]: {...previousState[type], value}}))
    }

    const changeHandlerHobby = (value: string) => {
        const index = personalInfo.hobby.value.indexOf(value)
        const temp = personalInfo.hobby
        index === -1 ? temp.value.push(value) : temp.value.splice(index, index + 1)
        setPersonalInfo(previousState => ({...previousState, hobby: temp}))
    }

    const changeBirthDay = (value: string, type: "day" | "month" | "year") => {
        setPersonalInfo(previousState => ({...previousState, birthDay: {...previousState.birthDay, [type]: value}}))
    }

    const getFullYear = () => {
        const birthDay = personalInfo.birthDay
        const now = new Date()
        const date = new Date(`${birthDay.month}-${birthDay.day}-${birthDay.year}`)
        const addOne = now.getMonth() - date.getMonth() >= 0 && now.getDate() - date.getDate() >= 0
        const diff = now.getFullYear() - date.getFullYear()
        return diff - 1 + (addOne ? 1 : 0)
    }

    const convertDate = () => {
        const birthDay = personalInfo.birthDay
        return `${birthDay.month}-${birthDay.day}-${birthDay.year}`
    }

    const submitForm = () => {
        const {firstName, lastName, sex, ocean, hobby} = personalInfo
        const refsArray: [string, { value: string, checkField: checkFieldType }][] = Object.entries(personalInfo);
        let validData = refsArray.reduce((acc, element) => {
            if (acc) {
                if (element[1].checkField === 'birthday') {
                    return !!functionCompare(getFullYear(), schema[element[1].checkField])
                } else {
                    return !!functionCompare(element[1].value, schema[element[1].checkField])
                }
            } else return acc
        }, true)
        if (!validData) {
            setError(true);
            return
        }
        dispatch(setPersonaInfoAction(firstName.value, lastName.value, sex.value, convertDate(), ocean.value, hobby.value))
    }

    return (
        <div className="personal-info-inputs">
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault()
                submitForm()
            }}>
                <div className='input-container'>
                    <input className={error ? 'error-value' : undefined} id="firstName" type="text"
                           placeholder="First name"
                           value={personalInfo.firstName.value}
                           onChange={(event) => {
                               changeHandler(event.target.value, "firstName")
                           }}/>
                    <input className={error ? 'error-value' : undefined} id="lastName" type="text"
                           placeholder="Last name"
                           value={personalInfo.lastName.value}
                           onChange={(event) => {
                               changeHandler(event.target.value, "lastName")
                           }}/>
                </div>
                <div className='form-container__radio-buttons'>
                    <p>Sex:</p>
                    <input className={error ? 'error-value' : undefined} type='radio' id='sexInput1' name="sexRadio"
                           value="male"
                           checked={personalInfo.sex.value === 'male'}
                           onChange={(event) => {
                               changeHandler(event.target.value, "sex")
                           }}/>
                    <label htmlFor="sexInput1">Male</label>
                    <input className={error ? 'error-value' : undefined} type='radio' id='sexInput2' name="sexRadio"
                           value="female"
                           checked={personalInfo.sex.value === 'female'} onChange={(event) => {
                        changeHandler(event.target.value, "sex")
                    }}/>
                    <label htmlFor="sexInput2">Female</label>
                </div>
                <div className='input-container flex-inputs'>
                    <label htmlFor="birthday">Birthday:</label>
                    <input className={error ? 'error-value day-birthday' : 'day-birthday'} id="birthday" type="number"
                           placeholder="DD"
                           value={personalInfo.birthDay.day}
                           onChange={(event) => {
                               changeBirthDay(event.target.value, "day")
                           }}/>
                    <input className={error ? 'error-value month-birthday' : 'month-birthday'} id="birthday"
                           type="number"
                           placeholder="MM"
                           value={personalInfo.birthDay.month} onChange={(event) => {
                        changeBirthDay(event.target.value, "month")
                    }}/>
                    <input className={error ? 'error-value year-birthday' : 'year-birthday'} id="birthday" type="number"
                           placeholder="YYYY"
                           value={personalInfo.birthDay.year} onChange={(event) => {
                        changeBirthDay(event.target.value, "year")
                    }}/>
                </div>
                <div className="ocean-container">
                    <label htmlFor="ocean">Your favorite ocean: </label>
                    <select id="ocean" value={personalInfo.ocean.value} onChange={event => {
                        changeHandler(event.target.value, "ocean")
                    }}>
                        {oceans.map((elem,index) => <option key={index}>{elem}</option>)}
                    </select>
                </div>
                <div className="checkbox-container">
                    <p>You favorite hobby (or hobbys):</p>
                    {hobbys.map((elem, index) => {
                        return <div className="checkbox-input" key={index}>
                            <label htmlFor={`${elem + index}`}>{elem}</label>
                            <input className={error ? 'error-value' : undefined}
                                   checked={personalInfo.hobby.value.includes(elem)} id={`${elem + index}`}
                                   type="checkbox" onChange={(event) => {
                                changeHandlerHobby(elem)
                            }}/>
                        </div>
                    })}
                </div>
                <div className='button-container'>
                    <button onClick={() => dispatch(changeSignUpFormAction())}>Change SignUp Information</button>
                    <button onClick={() => submitForm()}>Complete</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInfo;