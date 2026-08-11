/** @format */

import profile from "../assets/profile.jpg";

import {
  RiMenuLine,
  RiSearchLine,
  RiMicLine,
  RiNotification3Line,
  RiVideoAddLine,
} from "react-icons/ri";

import { FaYoutube } from "react-icons/fa";
import { MdApps } from "react-icons/md";

function Navbar() {
  return (
    <nav className=' sticky top-0  z-50 flex items-center justify-between bg-gray-900 px-4 py-3'>
      {/* Left */}
      <div className='flex items-center gap-4'>
        <RiMenuLine className='cursor-pointer text-2xl text-white' />

        <div className='flex cursor-pointer items-center gap-2'>
          <FaYoutube className='text-3xl text-red-600' />

          <h1 className='hidden text-xl font-bold text-white sm:block'>
            YouTube
          </h1>
        </div>
      </div>

      {/* Center */}
      <div className='hidden flex-1 items-center justify-center gap-3 px-6 md:flex'>
        <div className='relative w-full max-w-xl'>
          <RiSearchLine className='absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400' />

          <input
            type='text'
            placeholder='Search'
            className='w-full rounded-full border border-gray-700 bg-gray-800 py-2 pl-12 pr-5 text-white outline-none focus:border-blue-500'
          />
        </div>

        <button className='rounded-full bg-gray-800 p-3 transition hover:bg-gray-700'>
          <RiMicLine className='text-xl text-white' />
        </button>
      </div>

      {/* Mobile Search */}
      <div className='md:hidden'>
        <RiSearchLine className='cursor-pointer text-2xl text-white' />
      </div>

      {/* Right */}
      <div className='flex items-center gap-4'>
        <RiVideoAddLine className='hidden cursor-pointer text-2xl text-white transition hover:text-gray-300 sm:block' />

        <MdApps className='hidden cursor-pointer text-2xl text-white transition hover:text-gray-300 sm:block' />

        <RiNotification3Line className='cursor-pointer text-2xl text-white transition hover:text-gray-300' />

        <img
          src={profile}
          alt='Profile'
          className='h-9 w-9 cursor-pointer rounded-full object-cover'
        />
      </div>
    </nav>
  );
}

export default Navbar;
