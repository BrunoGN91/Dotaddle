import React, {useState, useEffect} from 'react'

import useApi from '../hooks/useApi';

const Countdown = () => {

  const { fade, setAlert } = useApi()

  const [daily, setDaily] = useState(Date.now());
  const tick = () => setDaily(Date.now())
  useEffect(() => {
      const timer = setInterval(tick, 1000)
      return () => clearInterval(timer)
  },[])

  // Countdown
  const dayTime = new Date('April 24, 2022 18:37:00');
  const newTime = new Date(daily);
  const COUNTDOWN = {
    hours: Math.floor((newTime.getTime()-dayTime.getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    minutes: Math.floor(((newTime.getTime()-dayTime.getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor(((newTime.getTime()-dayTime.getTime()) % (1000 * 60)) / 1000)
  }

  // const COUNTDOWN = {
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0
  // }

// Alert
  useEffect(() => {
    if(COUNTDOWN.hours === 0 && COUNTDOWN.minutes === 0 && COUNTDOWN.seconds === 0) {
      setAlert(true);
    }
  })
 
  const countdownTimer = `${24 - COUNTDOWN.hours.toFixed(0)}:${60 - COUNTDOWN.minutes}:${60 - COUNTDOWN.seconds}`
    
  return (
    <div>
          <h1 className={`text-white text-5xl text-center py-10 ${fade ? "animate-fadeOut" : ""}`}>Next Challange</h1>
        <h1 className={`text-center text-white text-8xl py-10 m-auto ${fade ? "animate-fadeOut" : ""}`}>{countdownTimer}</h1>
    </div>
  )
}

export default Countdown