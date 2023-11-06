import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-items-right'>
        <Link to='/'>
          <li>About us</li>
        </Link>
        <Link to='/'>
          <li>People</li>
        </Link>
        <Link to='/planets'>
          <li>Planets</li>
        </Link>
      </ul>
      <ul className='nav-items-left'>
        <li>
          <a href='#'>
            <img
              className='github-svg'
              alt='Github'
              title='Github'
              src='/images/icons/github_badge.svg'
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
