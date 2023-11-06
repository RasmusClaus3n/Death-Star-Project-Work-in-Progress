import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <ul className='nav-items-left'>
          <li>
            <a
              href='https://github.com/RasmusClaus3n'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='github'
                src='/images/icons/github_badge.svg'
                alt='GitHub'
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/rasmus-clausen-625b0a149/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='linkedin'
                src='/images/icons/linkedin.svg'
                alt='LinkedIn'
              />
            </a>
          </li>
        </ul>
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
      </div>
    </nav>
  );
}
