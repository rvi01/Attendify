import React from 'react';
import potter from '../images/download.jpeg';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ userData }) => {
  const { firstName, lastName, role } = userData;
  return (
    <>
      <nav className='flex justify-evenly mx-auto bg-profileNav my-auto h-20 shadow-xl'>
        <div>
          <img src={Logo} alt='Company Logo' />
        </div>
        <ul className='flex justify-around items-center p-4 m-4'>
          <li className='mr-4'>
            <Link to='/instructorprofile'>Dashboard</Link>
          </li>
          <li className='ml-4'>
            <Link to='/calender'>Calendar</Link>
          </li>
        </ul>
        <div className='flex justify-center items-center mr-8'>
          <div>
            <img className='w-[50px]' src={potter} alt='User Avatar' />
          </div>
          <a href='/calender' className='ml-2'>
            {firstName} {lastName}
          </a>
        </div>
      </nav>
      <div
        style={{
          width: '100%',
          height: '1px',
          boxShadow: '0px -5px 10px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
    </>
  );
};
export default Header;
