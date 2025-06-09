import './App.css'
import { Products } from './components/pages/Products'
import { Home } from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Product } from './components/pages/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path='/productos/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
