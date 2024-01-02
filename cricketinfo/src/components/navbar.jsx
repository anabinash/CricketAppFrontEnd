import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Scooreboard from "../pages/board/scooreboard";
// import { ShoppingCart } from "phosphor-react";
import './navbar.css';
// import matchesAPI from "../apis/matches";


export default function Navbar() {
  const navigate = useNavigate();

  // You can use navigate to programmatically navigate to a different route
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
       
      <div className="links"> 
        <Link to="/"> Home</Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/About"> About</Link>
        <Link to="/MatchesAPI"> Match</Link>
        <Link to="/signin"> Sign in</Link>
        
      </div>
    </div>
  );
}
