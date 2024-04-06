import React from 'react';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <nav className='flex '>
      <div>
        <img src={Logo} alt='Company Logo' />
      </div>
      <ul className='flex justify-center items-center p-4 m-4'>
        <li>
          <a href='#'>Dashboard</a>
        </li>
        <li>
          <a href='#'>Calendar</a>
        </li>
        <li className='flex justify-center items-center'>
          <a href='#'>John Ferdinand</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
