import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

import {fetchAPI, submitAPI} from './api';
import ConfirmedBooking from './ConfirmedBooking';

const initializeTimes = () => {
    return fetchAPI(new Date());
};
const updateTimes = (state, action) => {
    if (action.type === 'fetch') {
        return fetchAPI(new Date(action.date));
    }
    return state;
};

export default function Main () {
    const navigate = useNavigate();
    
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    const submitForm = (formData) => {
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
};

export {initializeTimes, updateTimes};