import React, {useState} from 'react'
import { useEffect } from 'react';
import ChallengeButton from './ChallengeButton';
import Heroes from './Heroes';
import Countdown from './Countdown';
import useApi from '../hooks/useApi';


const Inicio = () => {
    const { fade, setFade, alert} = useApi()
    
  
// Fade Function
const handleFade = () => {
  setFade(true)
  
}

  return (
    <>
        <main className='w-full h-screen bg-slate-900'>
        <div className='flex justify-start p-10'>
        {fade ? <Heroes/> : null}
        </div>
        <h1 className={`text-white text-9xl text-center py-10 ${fade ? "animate-fadeOut" : ""}`}> Dot.Addle</h1>
        <Countdown/>
        <div className='flex justify-center'>
        {!alert ? <ChallengeButton
        handleFade={handleFade}
        className={`${fade ? "animate-fadeOut" : ""}`}
        /> :null}
        </div>
        
    
      
      </main>
    </>
  )
}

export default Inicio