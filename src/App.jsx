import { useState } from 'react';
import './App.css';
import Index from './Pages/HomePage/Index.jsx';
import {Routes,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/animate.css";
import "../public/css/all.min.css";
import Loan from './Pages/LoanPage/Loan.jsx';

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Index/>} ></Route>
        <Route path='loan' element={<Loan />}></Route>
      </Routes>
    </div>
  )
}

export default App
