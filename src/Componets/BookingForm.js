import React, { useState } from 'react';


const BookingForm = ({ availableTimes = [], dispatch }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: '',
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Time:
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Number of Guests:
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Occasion:
          <select
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;