import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import SignUpImage from '../images/sign-up-form.png';
import Hide from '../images/Hide.png';
import Eye from '../images/eye.png';
import axios from 'axios';
import Swal from 'sweetalert2';

// import validator from 'validator';

const SignupPageForStudent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [selectBatch, setSelectBatch] = useState('Batch A');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordHide, setPasswordHide] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  // const [userType, setUserType] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibilityTwo = () => {
    setPasswordHide(!passwordHide);
  };
  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email,
        selectBatch,
        password,
        confirmPassword,
        rememberMe,
      };
      const response = await axios.post(
        'https://attendify-gj3u.onrender.com/api/submit',
        formData
      );
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'SignIn successfully!',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/profile'); // Redirect to the profile page
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.error,
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <>
      <div className='flex justify-between  h-screen'>
        <div className='w-1/2 flex flex-col justify-center items-center '>
          <div className='w-64 ml-[-80px]'>
            <img src={Logo} alt='logo' className='' />
          </div>
          <div>
            <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
              <li className='me-2'>
                <Link
                  to='/'
                  className={`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500 `}
                  aria-current='page'
                >
                  Instructor
                </Link>
              </li>
              <li className='me-2'>
                <Link
                  to='/signupstudent'
                  className={`inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
                >
                  Student
                </Link>
              </li>
            </ul>
            <h1 className='p-2  mt-4 text-xl text-customBlue'>
              Welcome Student!
            </h1>
            <form onSubmit={handleSubmit} className='p-2 text-formFontColor'>
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
                  required
                />
              </div>
              {/* Select Batch field */}
              <div className='m-2 flex flex-col'>
                <label className='text-[14px]' htmlFor='selectBatch'>
                  Select Batch
                </label>
                <select
                  className='border rounded black p-2 my-1 w-full sm:w-80 text-placeHolderColor'
                  id='selectBatch'
                  value={selectBatch}
                  onChange={(e) => setSelectBatch(e.target.value)}
                  required
                >
                  <option value=''>Select Your Batch</option>
                  <option value='A'>Batch A</option>
                  <option value='B'>Batch B</option>
                  <option value='C'>Batch C</option>
                </select>
              </div>
              {/* Password field */}
              <div className='m-2 flex flex-col relative'>
                <label className='text-[14px]' htmlFor='password'>
                  Password
                </label>
                <input
                  className='p-2 border rounded black w-full sm:w-80 text-placeHolderColor'
                  type={passwordVisible ? 'text' : 'password'}
                  id='password'
                  placeholder='******'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute inset-y-0 right-0 px-3 pb-4'
                >
                  <img
                    src={passwordVisible ? Eye : Hide}
                    alt='Eye icon'
                    className='h-5'
                  />
                </button>
                <p className='custom-size-text text-passWordTextColor my-1'>
                  Password must contain at-least 8 characters with 1 Number, 1{' '}
                  <br />
                  Uppercase alphabet and 1 Special character.
                </p>
              </div>
              {/*Confirm Password field */}
              <div className='m-2 flex flex-col relative'>
                <label className='text-[14px]' htmlFor='confirmPassword'>
                  Confirm Password
                </label>
                <input
                  className='p-2 border rounded black w-full sm:w-80 '
                  type={passwordHide ? 'text' : 'password'}
                  id='confirmPassword'
                  placeholder='******'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibilityTwo}
                  className='absolute inset-y-0 right-0 px-3 pt-4'
                >
                  <img
                    src={passwordHide ? Eye : Hide}
                    alt='Eye icon'
                    className='h-5'
                  />
                </button>
              </div>

              {/*Remember Me field */}
              <div className='flex justify-between w-full sm:w-80 mt-6 mb-3'>
                <div className='m-2 flex flex-row '>
                  <input
                    className='mr-1'
                    type='checkbox'
                    id='rememberMe'
                    checked={rememberMe} // Value depends on the state
                    onChange={handleCheckboxChange}
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
                  Sign Up
                </button>
              </div>
              <div className='w-65 mt-4'>
                <p className='custom-size-text w-full text-center mt-2'>
                  Already have an account?{' '}
                  <a href='/signin' className='text-customBlue font-medium'>
                    Log In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className='w-1/2'>
          <img
            src={SignUpImage}
            alt='Sign Up Form'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </>
  );
};

export default SignupPageForStudent;
