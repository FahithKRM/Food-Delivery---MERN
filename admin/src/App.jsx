import React from 'react'
import Navbar from './companents/Navbar/Navbar'
import Sidebar from './companents/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'

const App = () => {
  const URL = "http://localhost:4000";

  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add URL={URL} />} />
          <Route path="/list" element={<List URL={URL} />} />
          <Route path="/orders" element={<Orders URL={URL} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App