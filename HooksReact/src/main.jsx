import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdvanceState from './AdvancedState/AdvanceState.jsx'
import ArrayOfObjects from './AdvancedState/ArrayOfObjects.jsx'
import Formhandling from './AdvancedState/Formhandling.jsx'

createRoot(document.getElementById('root')).render(
    <>
     {/* <App /> */}
     {/* <AdvanceState /> */}
      {/* <ArrayOfObjects /> */}
      <Formhandling />
     

    </>
   
)
