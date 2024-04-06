import React, { useState } from 'react';
import SignInImage from '../images/login-form.png';
import Logo from '../images/logo.png';
import Hide from '../images/Hide.png';
import Eye from '../images/eye.png';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className='flex h-screen'>
      <div className='w-1/2'>
        <img src={SignInImage} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center pl-8'>
        <div className='flex justify-start'>
          <img src={Logo} alt='' className='mr-20' />
        </div>

        <h1 className=' text-customBlue mt-4 mr-20'>Welcome back!</h1>
        <p className='custom-size-text text-placeHolderColor mb-8 mr-20'>
          Welcome back! Please enter your details.
        </p>
        <form action=''>
          {/* Email field */}
          <div className=' m-2 flex flex-col'>
            <label className='text-[14px]' htmlFor='email'>
              Email
            </label>
            <input
              className='border rounded black p-2 my-1 w-full sm:w-80 text-placeHolderColor'
              type='email'
              id='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password field */}
          <div className='m-2 flex flex-col relative'>
            <label className='text-[14px]' htmlFor='password'>
              Password
            </label>
            <input
              className={
                'p-2 border rounded black w-full sm:w-80 text-placeHolderColor'
              }
              type={passwordVisible ? 'text' : 'password'}
              id='password'
              placeholder='******'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 px-3 pt-2'
            >
              <img
                src={passwordVisible ? Eye : Hide}
                alt='Eye icon'
                className='h-5'
              />
            </button>
            <p className='custom-size-text text-passWordTextColor my-1'></p>
          </div>
          {/*Remember Me field */}
          <div className='flex justify-between w-full sm:w-80 mt-6 mb-3'>
            <div className='m-2 flex flex-row '>
              <input
                className='mr-1'
                type='checkbox'
                id='rememberMe'
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.value)}
              />
              <label className='text-sm' htmlFor='rememberMe'>
                Remember Me
              </label>
            </div>
            <div className='text-sm m-2'>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href='#' className='text-customBlue'>
                Forget Password
              </a>
            </div>
          </div>
          <div className='w-full sm:w-80 ml-2'>
            <button
              type='submit'
              className='p-2 bg-customBlue text-white w-full'
            >
              Sign In
            </button>
          </div>
          <div className='w-65 mt-4'>
            <p className='custom-size-text w-full text-center mt-2'>
              Don’t have an account?
              <a href={'#'} className='text-customBlue font-medium'>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
