import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Add from './Pages/Add/Add';
import Order from './Pages/Order/Order';
import List from './Pages/List/List';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const url = 'http://localhost:5000'

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
      <Sidebar />
      <Routes>
        <Route path='/add' element={<Add />} />
        <Route path='/list' element={<List url={url}/>} />
        <Route path='/order' element={<Order url={url}/>} />
      </Routes>
    </div>
  )
}

export default App