import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalNavBar from './components/GlobalNavBar'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
