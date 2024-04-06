import React, { useState } from 'react';
import SignInImage from '../images/login-form.png';
import TroubleLoggingImage from '../images/troubleLoggingIn.png';

const TroubleLoggingIn = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2'>
        <img src={SignInImage} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col justify-center   w-1/2 pl-40'>
        <div className='mb-8'>
          <img src={TroubleLoggingImage} alt='' />
        </div>
        <h1 className='text-customBlue mb-2'>Trouble in Logging in?</h1>
        <p className='text-troubleLogging'>
          Enter your email and we wil, send you a link <br />
          to reset your password.
        </p>
        <p className='text-xs mt-2'>
          Return to
          <a href='#' className='text-customBlue '>
            Login In
          </a>
        </p>
      </div>
    </div>
  );
};

export default TroubleLoggingIn;
