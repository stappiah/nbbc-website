import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import Footer from './components/Footer'
import GivePage from './pages/Give'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/ministries" element={<Ministries />} /> 
        <Route path="/give" element={<GivePage />} /> 
      </Routes>
        <Footer />
    </Router>
  )
}

export default App