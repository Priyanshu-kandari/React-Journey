import './App.css'
import { Home } from './pages/home'
import { Menu } from './pages/Menu'
import { Profile } from './pages/Profile'
import { Navbar } from './pages/Navbar'
import { BrowserRouter as Router, Route, Routes , Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='*' element={<h1>404 ERROR!!</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
