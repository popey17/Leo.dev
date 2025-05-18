"use client"
import React, { useEffect, useState } from 'react'



const clock = () => {
  const [time, setTime] = useState('');

  const timeZone = "Asia/Bangkok";
  
  useEffect(() => {

    const timeUpdate = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString([], {
        hour12: false,
        timeZone,
      });
      setTime(formatted)
    }
    timeUpdate();
    const interval = setInterval(timeUpdate, 1000);
    return () => clearInterval(interval);    
  },[])

  if (time === null) return null; 

  return (
    <div className='nav__clock'>
      <span className='nav__clock__country'>Bangkok, TH
      </span>
      <span className='nav__clock__time'>
      {time}
      </span>
      </div>
  )
}

export default clock