import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.time && formData.guests > 0 && formData.occasion) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <h2>Book a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        <option value="">Select</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Make Reservation</button>

      {submitted && <p role="status">Reservation successful!</p>}
    </form>
  );
};

export default BookingForm;
