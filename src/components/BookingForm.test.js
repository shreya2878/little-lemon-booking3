import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders booking form and submits data', () => {
  render(<BookingForm />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2025-08-10' }
  });

  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: '19:00' }
  });

  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: '4' }
  });

  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: 'Birthday' }
  });

  fireEvent.click(screen.getByText(/Make Reservation/i));

  expect(screen.getByText(/Reservation successful!/i)).toBeInTheDocument();
});
