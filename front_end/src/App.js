import './App.css';
import { useState } from 'react';
import { Home } from './Components/Home';
import { LogIn } from './Components/Log In';
import { Register } from './Components/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [arei,setarei]=useState({});
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={arei && arei._id?<Home setare={arei}/>:<LogIn setare={setarei}/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="LogIn" element={<LogIn/>}/>
        {/* <Route path='*' element={<Error/>} />
        this syntex helps to show if any route is not defind then this route is automatically excicutes */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;