import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import { ShopContext } from './context/ShopContext'
import Privacy from './pages/Privacy'


function App() {
  const {theme} = useContext(ShopContext)

  return (
    <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${theme === 'dark' ? "bg-gray-900 text-gray-100" : ""}`}>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App