
import React from 'react';

import {
  BrowserRouter as Router,
 
  Route,
  
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';

import Dashboard from './Components/Dashboard.jsx'
import Alluser from './Components/classOne/Alluser.jsx';
import FirstTermMarksOne from './Components/classOne/FirstTermMarks.jsx';
import FirstTermMarksTwo from './Components/classTwo/FirstTermMarks.jsx';
import FirstTermMarksThree from './Components/classThree/FirstTermMarks.jsx';
import FirstTermMarksFour from './Components/classFour/FirstTermMarks.jsx';
import FirstTermMarksFive from './Components/classFive/FirstTermMarks.jsx';
import FirstTermMarksLkg from './Components/Lkg/FirstTermMarks.jsx';
import FirstTermMarksUkg from './Components/Ukg/FirstTermMarks.jsx';



import ClassOne from './Components/classOne/Alluser.jsx'
import ClassTwo from './Components/classTwo/Alluser.jsx'
import ClassThree from './Components/classThree/Alluser.jsx'
import ClassFour from './Components/classFour/Alluser.jsx'
import ClassFive from './Components/classFive/Alluser.jsx'
import Lkg from './Components/Lkg/Alluser.jsx'
import Ukg from './Components/Ukg/Alluser.jsx' 

function App() {
 

  return (
    <>
    
      <BrowserRouter>
      
     
        <Routes>
         <Route path='/'  element = <Home/> ></Route>
          <Route path='/login' element = <Login/> ></Route>
           <Route element = <PrivateRoutes/> >
          <Route path='/Dashboard' element = <Dashboard/> ></Route>
          <Route path='/all/:id' element = <Alluser/> ></Route>
          <Route path='/FirstTermMarksOne/' element = <FirstTermMarksOne/> ></Route>
          <Route path='/FirstTermMarksTwo/' element = <FirstTermMarksTwo/> ></Route>
          <Route path='/FirstTermMarksThree/' element = <FirstTermMarksThree/> ></Route>
          <Route path='/FirstTermMarksFour/' element = <FirstTermMarksFour/> ></Route>
          <Route path='/FirstTermMarksFive/' element = <FirstTermMarksFive/> ></Route>
          <Route path='/FirstTermMarksLkg/' element = <FirstTermMarksLkg/> ></Route>
          <Route path='/FirstTermMarksUkg/' element = <FirstTermMarksUkg/> ></Route>
          

    
           {/* Dashboard */}
          <Route path='/classOne' element = <ClassOne/> ></Route>
          <Route path='/classTwo' element = <ClassTwo/> ></Route>
          <Route path='/classThree' element = <ClassThree/> ></Route>
          <Route path='/classFour' element = <ClassFour/> ></Route>
          <Route path='/classFive' element = <ClassFive/> ></Route>
          <Route path='/Lkg' element = <Lkg/> ></Route>
          <Route path='/Ukg' element = <Ukg/> ></Route> 
          </Route> 
        
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
