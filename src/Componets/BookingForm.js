import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const success = await window.submitAPI(formData); // Assuming submitAPI is defined in global scope
      if (success) {
        navigate('/confirmation'); // Navigate to the booking confirmation page
      } else {
        console.log('Booking submission failed.');
        // Handle case where submission fails (optional)
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      // Handle network errors or other exceptions (optional)
    }
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <form onSubmit={submitForm}>
        {/* Date input */}
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

        {/* Time input */}
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Guests input */}
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

        {/* Occasion input */}
        <label>
          Occasion:
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          />
        </label>
        <br />

        {/* Submit button */}
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;