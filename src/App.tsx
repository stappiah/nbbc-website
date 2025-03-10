import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import Footer from './components/Footer'
import GivePage from './pages/Give'
import Sermon from './pages/Sermon'
import SermonDetails from './pages/SermonDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/ministries" element={<Ministries />} /> 
        <Route path="/give" element={<GivePage />} /> 
        <Route path="/sermons" element={<Sermon />} /> 
        <Route path="/sermons_details" element={<SermonDetails />} /> 
      </Routes>
        <Footer />
    </Router>
  )
}

export default App