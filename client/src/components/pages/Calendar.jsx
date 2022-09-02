import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../store/actions/modalActions';

const Calendar = () => {

const status = useSelector(state => state.modal);
let dispatch = useDispatch();

    const handleModalOpen = () => {
        dispatch(openModal(true));
    }
    const handleModalClose = () => {
        dispatch(closeModal(false))
    }

    console.log(status)


    return (
        <div className="calendar">
            <p><button onClick={() => handleModalOpen()}>Open</button></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p><button onClick={() => handleModalClose()}>Close</button></p>
        </div>
    )
}

export default Calendar;
