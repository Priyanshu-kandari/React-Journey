import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Profile } from './pages/Profile'
import Navbar from './pages/Navbar'
import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext()

function App(){
  const [username,setusername] = useState("Priyanshu")
  return(
    <AppContext.Provider value={{username,setusername}}>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home username={username}/>}/>
        <Route path='/Menu' element= {<Menu username={username}/>}/>
        <Route path='/Profile' element= {<Profile username={username} setusername={setusername}/>}/>
        <Route path='*' element= {<h1>ERROR!! 404</h1>}/>
      </Routes>
    </Router>
    </AppContext.Provider>
    

  )
}









export default App