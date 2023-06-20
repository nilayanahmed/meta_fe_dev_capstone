import BookingForm from "./BookingForm";

export default function BookingPage(props) {
    return (
            <BookingForm availableTimes={props.availableTimes} reducer={props.reducer} submitForm={props.submitForm}></BookingForm>
    );
}
