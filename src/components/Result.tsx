import React from 'react';
import {useTypeSelector} from "../useTypeSelector";

const Result = () => {
    const state = useTypeSelector(state=>state)
    return (
<div className="modal">
        <div className="modal__content" >
            <h1>Your Info:</h1>
            <p><b>Phone:</b> {state.signUpInfo.phone}</p>
            <p><b>Email:</b> {state.signUpInfo.email}</p>
            <p><b>First name</b> {state.personalInfo.firstName}</p>
            <p><b>Last name:</b> {state.personalInfo.lastName}</p>
            <p><b>Sex: </b>{state.personalInfo.sex}</p>
            <p><b>Birthday:</b> {state.personalInfo.birthday}</p>
            <p><b>Favorite ocean:</b> {state.personalInfo.favoriteOcean}</p>
            <p><b>Hobby:</b> {state.personalInfo.hobby.map(elem=><p>{elem}</p>)}</p>
        </div>
</div>
    );
};

export default Result;