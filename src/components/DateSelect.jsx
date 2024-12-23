import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    // Determine ten-day period (dekad)
    const tenDayPeriod = day <= 10 ? 11 : day <= 20 ? 21 : 31;

    // Pass the date components to the parent
    onDateChange({ year, month, tenDayPeriod });
  };

  return (
    <div className="date-select">
      <label htmlFor="date-picker" className="block text-sm font-medium text-gray-700">
        Select Date:
      </label>
      <DatePicker
        id="date-picker"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default DateSelect;
