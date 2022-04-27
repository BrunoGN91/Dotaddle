import ApiContext from "../context/ApiProvider";
import {useContext} from 'react'

const useApi = () => {
    return useContext(ApiContext)
}

export default useApi