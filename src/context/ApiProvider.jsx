import { useState, useEffect, createContext } from 'react'
import axios from 'axios'


const ApiContext = createContext();

const ApiProvider = ({children}) => {

    const [fade, setFade] = useState(false);
    const [alert, setAlert] = useState(false);
    const [heroesArr, setHeroesArr] = useState([])

 useEffect(() => {
        const URL_ENDPOINT = `http://localhost:8000/api/heroes`
        axios.get(URL_ENDPOINT).then(data => {
            setHeroesArr(data.data) 
        })         
    },[])
    
  
    return (
        <ApiContext.Provider
        value={{
        fade,
        alert,
        setAlert,
        setFade,
        heroesArr}}
        >
            {children}
        </ApiContext.Provider>
    )
}

export {
    ApiProvider
}

export default ApiContext