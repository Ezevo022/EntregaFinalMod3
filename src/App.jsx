import './App.css'
import { Products } from './components/pages/Products'
import { Home } from './components/pages/Home'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Product } from './components/pages/Product'
import { Navbar } from './components/ui/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path='/productos/:id' element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
