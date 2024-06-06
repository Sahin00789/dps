
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

import Lkg from './Components/Classes/Lkg.jsx'
import Ukg from './Components/Classes/Ukg.jsx'
import ClassOne from './Components/Classes/Class1.jsx'
import ClassTwo from './Components/Classes/Class2.jsx'
import ClassThree from './Components/Classes/Class3.jsx'
import ClassFour from './Components/Classes/Class4.jsx'
import ClassFive from './Components/Classes/Class5.jsx'




function App() {
 

  return (
    <>
    
      <BrowserRouter>
      
     
        <Routes>
         <Route path='/'  element = <Home/> ></Route>
          <Route path='/login' element = <Login/> ></Route>
           <Route element = <PrivateRoutes/> >
          
          <Route path='/Lkg' element = <Lkg/> ></Route>
          <Route path='/Ukg' element = <Ukg/> ></Route>
          <Route path='/ClassOne' element = <ClassOne/> ></Route>
          <Route path='/ClassTwo' element = <ClassTwo/> ></Route>
          <Route path='/ClassThree' element = <ClassThree/> ></Route>
          <Route path='/ClassFour' element = <ClassFour/> ></Route>
          <Route path='/ClassFive' element = <ClassFive/> ></Route>

          </Route> 
          
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
