import React from "react";
import SignUpInfo from "./components/SignUpInfo";
import PersonalInfo from "./components/PersonalInfo";
import {useTypeSelector} from "./useTypeSelector";

function App() {
    const {selectPage} = useTypeSelector(state=>state)

    const switchForm = () => {
        switch(selectPage){
            case 'signUpForm': return <SignUpInfo/>;
            case 'personalForm':return<PersonalInfo/>;
            default : return;
        }
    }
console.log(selectPage)
    return (
        <div className="container">
            <h1>{selectPage}</h1>
            {switchForm()}
        </div>
    );
}

export default App;
