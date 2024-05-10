import React from 'react';
import { Routes, Route,ScrollRestoration } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Order from './Pages/Order/Order';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={< Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart'  element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App