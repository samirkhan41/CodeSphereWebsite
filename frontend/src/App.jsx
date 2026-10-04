
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import Projects from './pages/Projects'
import Events from './pages/Events'
import CareerHub from './pages/CarrerHub'


const App = () => {

  return (
    <>


      <Routes>

        <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/career" element={<CareerHub />} />
      </Routes>
      
    </>
  )
}

export default App
