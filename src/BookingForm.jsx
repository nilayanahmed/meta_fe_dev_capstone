import { useState } from "react";

export default function BookingForm(props) {
    const style = {
        display: 'grid',
        maxWidth: '200px',
        gap: '20px'
    };
    const availableTimes = props.availableTimes;
    const dispatch = props.reducer;
    const submitForm = props.submitForm;

    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState(availableTimes.at(0));
    const [numGuests, setNumGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({type: 'fetch', date: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
        console.log(time);
        console.log(numGuests);
        console.log(occasion);
        submitForm(e.target.value);
    }

    return (
        <div className="res-form">
            <h1>Reserve a Table</h1>
            <form style={style} onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(event) => setTime(event.target.value)}>
                    {availableTimes.map((time) => <option key={time}> {time} </option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={numGuests} onChange={(event) => setNumGuests(event.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}
