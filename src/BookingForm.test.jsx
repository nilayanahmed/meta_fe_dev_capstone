import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import userEvent from '@testing-library/user-event';

// test('Renders the BookingForm heading', () => {
//     act(() => {
//         const bookingForm = render(<BookingForm availableTimes={['13:00']} />);
//         // const headingElement = screen.getByText("Reserve a Table");


//         // save the heading in a variable
//         // const heading = screen.getByTestId("currentNumber"); 

//         // save the button in a variable
//         const btn = bookingForm.getByTestId("res-submit");

//         // click the btn
//         fireEvent.click(btn);

//         // expect(headingElement).toBeInTheDocument();
//     });
// })

test('Should submit BookingForm', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    userEvent.type(date, '2023-06-19');
    userEvent.selectOptions(time, '13:00');
    userEvent.type(guests, '2');
    userEvent.selectOptions(occasion, 'Birthday');
    userEvent.click(submitButton);

    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalled();
    });
});

test('Should not submit BookingForm', async () => {
    const handleSubmit = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} submitForm={handleSubmit} />);
    const submitButton = formComponent.getByTestId('res-submit');

    userEvent.click(submitButton);

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});
