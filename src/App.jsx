import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalNavBar from './components/GlobalNavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
import ContactUS from './pages/ContactUs'
import DairySols from './pages/DairyFarmingSol'
import FeedingSols from './pages/FeedingSol'
import Forage from './pages/ForageSol'
import Silage from './pages/Silage'
import Milking from './pages/Milking'
import Biosecurity from './pages/FarmBiosecuritySol'
import Hygiene from './pages/MilkHygiene'
import Teat from './pages/TeatHealthSol'
import Calf from './pages/CalfHealthSol'
import Monitoring from './pages/CowMonitSol'
import Feed from "./pages/FeedAdditives"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path="/products/dairy"       element={<DairySols />} />
        <Route path="/products/feeding"     element={<FeedingSols />} />
        <Route path="/products/forage"      element={<Forage />} />
        <Route path="/products/silage"      element={<Silage />} />
        <Route path="/products/milking"     element={<Milking />} />
        <Route path="/products/biosecurity" element={<Biosecurity />} />
        <Route path="/products/hygiene"     element={<Hygiene />} />
        <Route path="/products/teat"        element={<Teat />} />
        <Route path="/products/calf"        element={<Calf />} />
        <Route path="/products/monitoring"  element={<Monitoring />} />
        <Route path='/products/feed' element={<Feed />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
