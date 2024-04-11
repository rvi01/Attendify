import React from 'react';
import Header from './Header';
import PadLock from '../images/pad-lock.png';

const InstructorProfile = () => {
  const areaCodes = [
    '+1 (United States)',
    '+44 (United Kingdom)',
    '+91 (India)',
  ];

  return (
    <>
      <Header />
      <h1 className='pl-8 ml-16 mt-4'>My Profile</h1>
      <div>
        {/* Padlock Image */}
        <div className='w-64 h-64 mt-24 ml-16'>
          <img src={PadLock} alt='' className='object-cover w-full h-full ' />
        </div>
        {/* Profile Form */}

        <div>
          <form className='space-y-4'>
            {/* First Name */}
            <div className='flex  flex-col'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' name='firstName' id='firstName' />
            </div>
            {/* Last Name */}
            <div className='flex  flex-col'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' id='lastName' />
            </div>
            {/* Email address */}
            <div className='flex  flex-col'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className=''>
              {/* country code field */}
              <div className='flex flex-col'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <div>
                  <select name='areaCode' id='areaCode'>
                    {areaCodes.map((areaCode, index) => (
                      <option key={index} value={areaCode}>
                        {areaCode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* number field */}
              <div>
                <input type='number' name='phoneNumber' id='phoneNumber' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InstructorProfile;
