import React, {useState} from "react";
import Login from "../form/Login";
import Signup from "../form/Signup";

const Statistics = () => {

    const [isSubmit, setIsSumbit] = useState(false);

    function submitForm() {
        setIsSumbit(true);
    }

    return (
        <div className="statistics">
            {!isSubmit ? <Signup submitForm={submitForm} /> : <Login />}
        </div>
    )
}

export default Statistics;