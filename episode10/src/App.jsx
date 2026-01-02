import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Profile } from './pages/Profile'
import Navbar from './pages/Navbar'
import {QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createContext, useState } from 'react'


export const AppContext = createContext()
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnMount: false,
      staleTime: Infinity,
    }
  }
})


function App() {
  const [username, setusername] = useState("Priyanshu");
  return (
    <QueryClientProvider client={client}>
      <AppContext.Provider value={{ username, setusername }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/Menu' element={<Menu  />} />
          <Route path='/Profile' element={<Profile  />} />
          <Route path='*' element={<h1>ERROR!! 404</h1>} />
        </Routes>
      </Router>
    </AppContext.Provider>
    </QueryClientProvider>
  )
}


export default App