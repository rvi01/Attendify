import React from 'react';

const Modal = ({ onClose,userData,meetingData }) => {
  const { firstName, lastName, role, selectBatch} = userData;
  const {ClassLink,InstructorName,MeetingDate,MeetingTime,SelectBatch,TopicName} = meetingData
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-xl font-bold mb-4'>Meeting Details</h2>
        <div className='mb-4'>
          <p>
            <span className='font-semibold'>Instructor:</span> {firstName} {lastName}
          </p>
          <p>
            <span className='font-semibold'>Batch Name:</span> {selectBatch}
          </p>
          <p>
            <span className='font-semibold'>Date:</span> 01-24-202
          </p>
          <p>
            <span className='font-semibold'>Time:</span> ( 10 AM )
          </p>
          <p>
            <span className='font-semibold'>Topic:</span> Mern July COOP Batch
          </p>
        </div>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          onClick={onClose}
        >
          Join Meeting
        </button>
      </div>
    </div>
  );
};

export default Modal;
