import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={['13:00']}/>);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
})

const availableTimes = {
  times: ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"],
};