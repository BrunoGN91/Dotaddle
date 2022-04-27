import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

import useApi from '../hooks/useApi'

const Heroes = () => {

  const { heroesArr } = useApi();
  const [heroesList, setHeroesList] = useState(false)
    
  const data = []

  Object.values(heroesArr).map(heroe => {
    data.push(heroe.images.lg)
   })

 

  return (
    <>
    <button
      className='p-3 bg-stone-900 text-center border-4 rounded text-white'
      onClick={() => setHeroesList(!heroesList)}
      >
        Heroes
      </button>
      <div className={` ${heroesList ? 'flex flex-wrap content-center justify-center w-3/5 px-1 py-1 bg-stone-900' : ''}`}>
    {heroesList ? data.map(image => (
      <img className='w-20' src={image} alt="" />
    )) : null}
     </div>
    </>
  )
}

export default Heroes