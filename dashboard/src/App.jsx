import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import Message from './components/Message.jsx';
import AddNewDoctor from './components/AddNewDoctor.jsx';
import AddNewAdmin from './components/AddNewAdmin.jsx';
import Doctors from './components/Doctors.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/doctor/addnew' element={<AddNewDoctor/>}/>
          <Route path='/admin/addnew' element={<AddNewDoctor/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/messages' element={<Message/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
