import React from 'react';
import Header from './Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const CalenderComponent = () => {
  const localizer = momentLocalizer(moment);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      color: '#000000',
    };
    return {
      style,
    };
  };

  const dayPropGetter = (date) => {
    return {
      className: 'rounded-days',
    };
  };
  return (
    <>
      <div className='bg-blueBackgroundColor'>
        <Header />
        <h1 className='mt-4 ml-32'>Calendar</h1>
        <div className='bg-white w-3/4 mx-auto my-auto h-120 mt-4 p-8 border rounded-xl  border-grey shadow-md'>
          <Calendar
            localizer={localizer}
            events={[
              {
                title: 'Meeting',
                start: new Date(2024, 3, 12, 10, 0),
                end: new Date(2024, 3, 12, 12, 0),
              },
            ]}
            startAccessor='start'
            endAccessor='end'
            style={{
              height: '90vh',
            }}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayPropGetter}
          />
          <p className='text-center p-8 mt-5 '>
            2024 Pragratime. All rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default CalenderComponent;
