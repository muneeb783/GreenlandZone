import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalNavBar from './components/GlobalNavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
