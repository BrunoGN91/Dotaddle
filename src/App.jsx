
import { ApiProvider } from './context/ApiProvider'
import Inicio from './components/Inicio'



const App = () => {

  return (
    <ApiProvider>
     <Inicio/>
    </ApiProvider>
  )
}

export default App
