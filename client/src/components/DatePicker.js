import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "./Header";
const DatePicker = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "MERN COOP",
      allDay: true,
      start: new Date(2024, 3, 28),
      end: new Date(2024, 3, 30),
    },
    {
      title: "Angular COOP",
      start: new Date(2024, 4, 3),
      end: new Date(2024, 4, 3),
    },
  ];
  return (
    <>
      <Header />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh", margin: "50px" }}
      />
    </>
  );
};

export default DatePicker;
