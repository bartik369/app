import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store/actions/modalActions';

const Calendar = () => {

const status = useSelector(state => state.modal);
let dispatch = useDispatch();

    console.log(status)

    const handleModal = (e) => {
        console.log("click")
        dispatch(openModal("true"));
        console.log(status);
    }


    return (
        <div className="calendar">
            <p><button onClick={(e) => handleModal(e)}>Set Status</button></p>
        </div>
    )
}

export default Calendar;
