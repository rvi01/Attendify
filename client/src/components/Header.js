import React from 'react';
import MenImage from '../images/men.png';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <nav className='flex justify-evenly mx-auto bg-profileNav my-auto h-20 shadow-md'>
      <div>
        <img src={Logo} alt='Company Logo' />
      </div>
      <ul className='flex justify-around items-center p-4 m-4'>
        <li className='mr-4'>
          <a href='#'>Dashboard</a>
        </li>
        <li className='ml-4'>
          <a href='#'>Calendar</a>
        </li>
      </ul>
      <div className='flex justify-center items-center mr-8'>
        <div>
          <img src={MenImage} alt='User Avatar' />
        </div>
        <a href='#'>John Ferdinand</a>
      </div>
    </nav>
  );
};

export default Header;
