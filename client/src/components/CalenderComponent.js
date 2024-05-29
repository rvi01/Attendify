import { useState,useEffect } from "react";
import Header from './Header';
import { useNavigate,useLocation  } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Modal from './Modal';
import useAuth from './AuthContext';
import Swal from 'sweetalert2';
import MeetingModal from "./MeetingModal";


const CalenderComponent = () => {
  useAuth();
  const navigate = useNavigate()
  const location = useLocation ();
  const token = localStorage.getItem('token');
  
  const [userData, setUserData] = useState(null);
  const [meetingData, setMeetingData] = useState([]);
  const [role, setRole] = useState("");
  const _id = localStorage.getItem('_id');

  useEffect( () => {
    fetchdata()
  },[])

  const fetchdata = async () => {
    try {
      if(_id){
        const response = await axios.get(`https://attendify-gj3u.onrender.com/data/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const meetingResponseData = await axios.get(`http://localhost:8000/meetingData`);
        setUserData(response.data.userData);
        setRole(response.data.userData.role);
        setMeetingData(meetingResponseData.data.meetingData)
      }
    } catch (error) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          confirmButtonText: 'OK'
        })
    }
  };
  
  const CreateMeeting = async (event) => {
    setSelectedEvent(event);
    setshowMeetingModal(true);
  }
 
  const localizer = momentLocalizer(moment);
  const [showModal, setShowModal] = useState(false);
  
  const [showMeetingModal, setshowMeetingModal] = useState(false);
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
      {userData ? (
        <Header userData={userData}/>
      ) : (
        <Header/>
      )}
        <div className="flex w-3/4  items-center justify-between">
          <h1 className='mt-2 ml-60 text-bold'>Calendar</h1>
          {role == "I" ? (
            <button type="button" onClick={CreateMeeting} class="p-2 bg-slate-500 text-white">Create Meeting</button>
          ) : (
            <button type="button" class="p-2 invisible  bg-slate-500 text-white">Create</button>
          )}
          
        </div>
        <div className='bg-white w-3/4 mx-auto my-auto h-120 mt-2 p-8 border rounded-xl  border-grey shadow-md'>
          <Calendar 
            localizer={localizer}
            events={meetingData.map(meeting => ({
              title: meeting.TopicName,
              start: new Date(meeting.MeetingDate),
              end: new Date(meeting.MeetingDate),
            }))}
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
      
      {showModal && <Modal userData={userData} meetingData={meetingData} event={selectedEvent} onClose={handleCloseModal} />}
      {showMeetingModal && <MeetingModal userData={userData} event={selectedEvent} onClose={handleCloseModal} />}
      
    </>
  );
};

export default CalenderComponent;
