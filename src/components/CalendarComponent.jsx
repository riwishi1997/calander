import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarStyles.css";

const holidays = [
  { date: "2024-12-25", name: "Christmas" },
  { date: "2024-01-01", name: "New Year" },
  { date: "2024-07-04", name: "Independence Day" },
  { date: "2024-11-28", name: "Thanksgiving" },
];

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());

  const isHoliday = (date) => {
    return holidays.some(
      (holiday) =>
        new Date(holiday.date).toDateString() === date.toDateString()
    );
  };

  const tileClassName = ({ date }) => {
    if (isHoliday(date)) return "holiday-tile";
    return null;
  };

  const tileContent = ({ date }) => {
    const holiday = holidays.find(
      (holiday) =>
        new Date(holiday.date).toDateString() === date.toDateString()
    );
    return holiday ? <span className="holiday-label">{holiday.name}</span> : null;
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Responsive Calendar</h1>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        tileContent={tileContent}
        className="custom-calendar"
      />
      <div className="selected-date">
        <strong>Selected Date:</strong> {value.toDateString()}
      </div>
    </div>
  );
};

export default CalendarComponent;