import React from "react";
import SignUpInfo from "./components/SignUpInfo";
import PersonalInfo from "./components/PersonalInfo";

function App() {
    return (
        <div className="container">
            <h1>Registration</h1>
            {/*<SignUpInfo/>*/}
            <PersonalInfo/>
        </div>
    );
}

export default App;
