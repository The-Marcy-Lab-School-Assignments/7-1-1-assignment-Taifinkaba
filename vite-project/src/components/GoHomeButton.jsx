// TODO: 
// - Make the button navigate the user back to the home page
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const GoHomeButton = () => {
  const navigate=useNavigate();

  const handleGoHome=()=>{
    navigate('/');
  }

  return (
    <button className="ui button fluid"  onClick={handleGoHome}>
      Go Home
    </button>
  )
}

export default GoHomeButton;