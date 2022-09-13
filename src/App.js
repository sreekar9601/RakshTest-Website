import React from 'react';
import {Route, Routes} from "react-router-dom";
import Nav from './nav';
import {Donate} from "./pages/donate"



export default function App() {

  return (
    <>
    
    <Nav />
    <div className='container'>
    <Routes>
          <Route path='/Donate' element={<Donate />} />
    </Routes>
    </div>
    </>
  );
}

