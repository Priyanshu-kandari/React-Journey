import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetch from './fetch.jsx'
import Age from './agify.jsx'
import GiveExcuse from './excuser.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <Fetch/>
    <Age />
    <GiveExcuse />
  </div>
    
)
