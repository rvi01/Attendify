import React from 'react';
import Header from './Header';
import PadLock from '../images/pad-lock.png';
import { Formik } from 'formik';
import { useLocation  } from 'react-router-dom';

const InstructorProfile = () => {
  const location = useLocation ();
  const { userData } = location.state;
  const areaCodes = ['+1 ', '+44 ', '+91 '];

  return (
    <>
      <Header userData={userData} />
      <div className='bg-blueBackgroundColor'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center justify-center items-center'>
          {/* Padlock Image */}
          <div className='order-1 md:order-none md:w-1/2 md:pl-8 md:pr-4 flex flex-col items-center justify-center mt-20 md:mt-20'>
            <h1 className='pl-8 ml-16 mt-4 text-center mb-8'>My Profile</h1>
            <img
              src={PadLock}
              alt=''
              className='object-cover w-[294px] h-[294px] md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64'
            />
          </div>
          {/* Profile Form */}
          <div className='order-2  mt-90 md:order-none md:pr-8 md:pl-4 w-full md:w-3/5 mt-70 sm:mt-10 '>
            <Formik
              initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log('Submitted values:', values);
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4  w-[500px] px-8 py-20 border rounded border-gray-300 bg-white shadow-md'
                >
                  {/* First Name */}
                  <div className='flex flex-col'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      className='text-formFontColor border rounded p-2'
                      placeholder='Enter your first name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                  {/* Last Name */}
                  <div className='flex flex-col'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      className=' border rounded p-2'
                      placeholder='Enter your last name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                  {/* Email address */}
                  <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className=' border rounded p-2'
                      placeholder='abcxyz@gmail.com'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  {/* Phone Number */}
                  <div className='flex flex-col'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <div className='flex'>
                      {/* Country code field */}
                      <div>
                        <select
                          name='areaCode'
                          id='areaCode'
                          className=' border rounded p-2 '
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.areaCode}
                        >
                          {areaCodes.map((areaCode, index) => (
                            <option key={index} value={areaCode}>
                              {areaCode}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* Number field */}
                      <div>
                        <input
                          type='number'
                          name='phoneNumber'
                          id='phoneNumber'
                          className=' border rounded p-2 w-[320px] ml-2'
                          placeholder='Enter your Number'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <p className='text-center p-8 mt-10 '>
          2024 Pragratime. All rights Reserved
        </p>
      </div>
    </>
  );
};

export default InstructorProfile;
