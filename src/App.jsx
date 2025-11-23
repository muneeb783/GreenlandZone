import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect } from 'react'
import { HelmetProvider } from './components/SEO'
import GlobalNavBar from './components/GlobalNavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'
import ContactUS from './pages/ContactUs'
import ProductsLanding from './pages/ProductsLanding'
import DairySols from './pages/DairyFarmingSol'
import DairyParts from './pages/DairyParts'
import Forage from './pages/ForageSol'
import Milking from './pages/Milking'
import Hygiene from './pages/MilkHygiene'
import Teat from './pages/TeatHealthSol'
import Monitoring from './pages/CowMonitSol'
import Feed from "./pages/FeedAdditives"
import OurTeam from './pages/OurTeam'

// ScrollToTop component to handle page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top synchronously before paint
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/team' element={<OurTeam />} />
          <Route path='/contact' element={<ContactUS />} />
          <Route path="/products" element={<ProductsLanding />} />
          <Route path="/products/dairy"       element={<DairySols />} />
          <Route path="/products/parts"     element={<DairyParts />} />
          <Route path="/products/forage"      element={<Forage />} />
          <Route path="/products/milking"     element={<Milking />} />
          <Route path="/products/hygiene"     element={<Hygiene />} />
          <Route path="/products/teat"        element={<Teat />} />
          <Route path="/products/monitoring"  element={<Monitoring />} />
          <Route path='/products/feed' element={<Feed />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}
