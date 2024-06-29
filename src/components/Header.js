import React from 'react';
import Logo from '../assets/alien-removebg-preview.png';

const Header = () => {
  return <header className='bg-text-content-500 py-8'>
    <div className='container max-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img  className='img' src={Logo} alt=''></img>
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
