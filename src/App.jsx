import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header'
import Banner from './banner/Index';
import LandingPage from './layout/LandingPage'
import Form from './banner/Formpage'
import Subscription from './subscription/index'
import Join from './joinprep/index';
import Prepyoutube from './prepyoutube/index'
import Formlast from './formlast/index';
import Benefits from './benefits/index'
import Plans from './subplans/index'
import Class from './classes/index'
import Footer from './layout/Footer'
import './App.css'
import Classroom from './components/classroom/Classroom'
import WhystudyWithus from './components/whystudywithus/WhystudyWithus'
import Faculty from './components/faculty/Faculty';
// import LandingPage from './layout/LandingPage'
import Formsecond from './components/formsecond/index'
import Doyouhavequestions from './components/doyouhavequestion/index'

import Dashboard  from './layout/Dashboard'





const App = () => {
  

  return (
    
      <div>

        <Routes>
          
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/home' element={<LandingPage/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/banner' element={<Banner/>}/>
          <Route path='/subscription' element={<Subscription/>}/>
          <Route path='/joinprep' element={<Join/>}/>
          <Route path='/prepyoutube' element={<Prepyoutube/>}/>
          <Route path='/formlast' element={<Formlast/>}/>
          <Route path='/benefits' element={<Benefits/>}/>
          <Route path='/plans' element={<Plans/>}/>
          <Route path='/faculty' element={<Faculty/>}/>
          <Route path='/catclass' element={<Class/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/formsecond' element={<Formsecond/>}/>
          <Route path='/questions' element={<Doyouhavequestions/>}/>

        </Routes>


      </div>
    
  );
};

export default App;
