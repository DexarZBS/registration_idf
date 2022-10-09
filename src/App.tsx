import React, {useState} from "react";
import SignUpInfo from "./components/SignUpInfo";
import PersonalInfo from "./components/PersonalInfo";
import {useTypeSelector} from "./useTypeSelector";
import Result from "./components/Result";
import {ReactComponent as Logo} from "./img/logo.svg";

function App() {
    const {selectPage} = useTypeSelector(state => state)

    const switchForm = () => {
        switch (selectPage) {
            case 'signUpForm':
                return <SignUpInfo/>;
            case 'personalForm':
                return <PersonalInfo/>;
            default :
                return <Result/>;
        }
    }

    return (
        <>
            <header className="app-header"><Logo className="logo"/></header>
            <div className="container">
                <div className="current-form">
                    <h1 className={selectPage === "signUpForm" ? "select-form" : undefined}> SignUp </h1>
                    <h1 className={selectPage === "personalForm" ? "select-form" : undefined}> Personal Info </h1>
                </div>
                {switchForm()}
            </div>
            <footer className="app-footer"><Logo className="logo"/></footer>
        </>
    );
}

export default App;
