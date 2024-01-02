import React from "react";
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddMatchApi from "./components/AddMatchapi";
import Home from "./pages/home";
import Login from "./pages/login";
             
            
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path="/MatchesAPI" element={<AddMatchApi />}/>
          <Route path="/signin" element={<Login />}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
