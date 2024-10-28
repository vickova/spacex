"use client"; // Add this line at the top

import Image from 'next/image';
import { useState } from 'react';
import { CapsuleLists } from './components/CapsuleLists';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('');
  const [launchDate, setLaunchDate] = useState('');

  const handleSearch = () => {
    // Logic to filter or search capsules based on the inputs
    console.log('Searching for:', {
      searchQuery,
      status,
      launchDate
    });
    // Call a function or update state to fetch/search the data accordingly
  };

  return (
    <div>
      <div className='top__bar'>
        <div className='main__bar__input'>
          <div className='search__input'>
            <Image src='/search-line.svg' width={40} height={40} alt='search__icon' />
          </div>
          <input
            type="text"
            placeholder="Capsule ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='filters d-flex gap-3'>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="status-filter"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
            </select>
            <input
              type="date"
              value={launchDate}
              onChange={(e) => setLaunchDate(e.target.value)}
              className="launch-date-filter"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
        </div>
        <div className='profile__cover d-flex gap-3 align-items-center'>
          <Image src='/mail-line.svg' width={20} height={20} alt='mail__icon' />
          <Image src='/notification-3-line.svg' width={20} height={20} alt='profile__icon' />
          <div className='profile d-flex gap-3 align-items-center'>
            <Image src='/bg-man.webp' width={20} height={20} alt='profile__picture' />
            <div className='profile__details'>
              <p>Jane Cooper</p>
              <p>janecooper123@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='capsule__list__cover'>
        <h3>List of capsules</h3>
        <CapsuleLists />
      </div>
    </div>
  );
}
