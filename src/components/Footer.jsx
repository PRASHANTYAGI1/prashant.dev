import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='fixed bottom-0 z-50 w-full px-6 py-4 text-white shadow-inner bg-black/10 backdrop-blur-md border-white/20'>
      <div className='flex flex-col items-center justify-between sm:flex-row sm:items-center'>
        {/* Left Name */}
        <h1 className='mb-2 text-xs font-semibold tracking-wide sm:mb-0'>
          Prashant.dev
        </h1>

        {/* Center Icons */}
        <ul className='flex mb-2 space-x-6 text-lg sm:mb-0'>
          <li>
            <a
              href='https://github.com/PRASHANTYAGI1'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(0,255,255,0.5)]'
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/prashant-tyagi-bb3b0b271/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(0,255,255,0.6)]'
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(0,255,255,0.7)]'
            >
              <FaTwitter size={20} />
            </a>
          </li>
        </ul>

        {/* Right: Copyright */}
        <p className='text-[10px] text-white/60'>
          © {new Date().getFullYear()} Prashant. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
