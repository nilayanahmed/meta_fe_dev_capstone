import { act, render, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';
import userEvent from '@testing-library/user-event';

test('Should submit BookingForm', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
       userEvent.type(date, '2023-06-19');
    })
    act(() => {
        userEvent.selectOptions(time, '13:00');
    })
    act(() => {
        userEvent.type(guests, '2');
    })
    act(() => {
        userEvent.selectOptions(occasion, 'Birthday');
    })
    act(() => {
        userEvent.click(submitButton);
    })

    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalled();
    });
});

test('Should not submit BookingForm', async () => {
    const handleSubmit = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} submitForm={handleSubmit} />);
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
        userEvent.click(submitButton);
    });

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});

test('Should not submit BookingForm if date not selected', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
        userEvent.selectOptions(time, '13:00');
    })
    act(() => {
        userEvent.type(guests, '2');
    })
    act(() => {
        userEvent.selectOptions(occasion, 'Birthday');
    })
    act(() => {
        userEvent.click(submitButton);
    })

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});

test('Should not submit BookingForm if time not selected', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
        userEvent.type(date, '2023-06-20');
    })
    act(() => {
        userEvent.type(guests, '2');
    })
    act(() => {
        userEvent.selectOptions(occasion, 'Birthday');
    })
    act(() => {
        userEvent.click(submitButton);
    })

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});

test('Should not submit BookingForm if number of guests not selected', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
        userEvent.type(date, '2023-06-20');
    })
    act(() => {
        userEvent.selectOptions(time, '13:00');
    })
    act(() => {
        userEvent.selectOptions(occasion, 'Birthday');
    })
    act(() => {
        userEvent.click(submitButton);
    })

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});

test('Should not submit BookingForm if occasion not selected', async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    const formComponent = render(<BookingForm availableTimes={['13:00']} reducer={dispatch} submitForm={handleSubmit} />);
    const date = formComponent.getByTestId('date');
    const time = formComponent.getByTestId('time');
    const guests = formComponent.getByTestId('guests');
    const occasion = formComponent.getByTestId('occasion');
    const submitButton = formComponent.getByTestId('res-submit');

    act(() => {
        userEvent.type(date, '2023-06-20');
    })
    act(() => {
        userEvent.selectOptions(time, '13:00');
    })
    act(() => {
        userEvent.type(guests, '2');
    })
    act(() => {
        userEvent.click(submitButton);
    })

    await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
    });
});