import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import BookingPage from './BookingPage';
import { useEffect, useReducer, useState } from 'react';

import {fetchAPI, submitAPI} from './api';
import ConfirmedBooking from './ConfirmedBooking';

export default function Main () {
    const navigate = useNavigate("/confirmed")
    const initializeTimes = () => {
        return fetchAPI(new Date());
    }
    const updateTimes = (state, action) => {
        if (action.type === 'fetch') {
            return fetchAPI(new Date(action.date));
        }
        return state;
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const submitForm = (formData) => {
        console.log(formData);
        submitAPI(formData);
        navigate("/confirmed");
    };


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} reducer={dispatch} submitForm={submitForm}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
    );
}