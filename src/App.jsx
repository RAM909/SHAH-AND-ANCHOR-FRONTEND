import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import { UserProvider } from './feature/userslice';
import ApplicationForm from './components/ApplicationForm';
import FindSponsor from './Pages/TopSponsor';
import HomePage from './Pages/Home';
import PrivateRoute from './layout/PrivateRoute';
<<<<<<< HEAD
import AdminNavbar from './components/AdminNavbar';
import Table from './components/Table'
=======
import Update from './Pages/Update';
import SponsorList from './components/SponsorList';
import NewSponsors from './Pages/NewSponsors';
import RegSponsor from './Pages/RegSponsor';  
import Request from './Pages/Requests';
import YourEvents from './Pages/YourEvents';
import MoreInfo from './Pages/MoreInfo';
>>>>>>> e046fd862451e955e0c57bcc6a58236c585cbde2
function App() {

  return (
    <>


      <Router>
        {/* <Navbar/>  */}
        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/Find" element={<FindSponsor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/register" element={<ApplicationForm />} />
<<<<<<< HEAD
          <Route path="/admin" element= {< AdminNavbar/>}/>
          <Route path='/Table' element={<Table/>}/>
=======
          <Route path="/update" element={<Update/>} />
          <Route path="/Opportunites" element={<NewSponsors/>} />
          <Route path="/RegSponsor" element={<RegSponsor  />} />
          <Route path="/Requests" element={<Request/>} />
          <Route path="/yourEvents" element={<YourEvents/>} />
          <Route path="/MoreInfo" element={<MoreInfo/>} />

>>>>>>> e046fd862451e955e0c57bcc6a58236c585cbde2
        </Routes>

      </Router>

    </>
  )
}

export default App;
