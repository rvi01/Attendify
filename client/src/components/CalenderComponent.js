import React, { useState } from 'react';
import Header from './Header';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Modal from './Modal';
const CalenderComponent = () => {
  const localizer = momentLocalizer(moment);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      borderRadius: '1px',

      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#001270',
      color: '#FFFFFF',
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
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='bg-blueBackgroundColor'>
        <Header />
        <h1 className='mt-2 ml-60 text-bold'>Calendar</h1>
        <div className='bg-white w-3/4 mx-auto my-auto h-120 mt-2 p-8 border rounded-xl  border-grey shadow-md'>
          <Calendar
            localizer={localizer}
            events={[
              {
                title: 'COOP BATCH',
                start: new Date(2024, 3, 12, 10, 0),
                end: new Date(2024, 3, 12, 12, 0),
              },
            ]}
            startAccessor='start'
            endAccessor='end'
            style={{
              height: '70vh',
            }}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayPropGetter}
            onSelectEvent={handleEventClick}
          />
          <p className='text-center p-4 mt-2 '>
            2024 Pragratime. All rights Reserved
          </p>
        </div>
      </div>
      {showModal && <Modal event={selectedEvent} onClose={handleCloseModal} />}
    </>
  );
};

export default CalenderComponent;
