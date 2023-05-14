import React, { useState } from 'react';
import { Login, Signin } from './FYP/login';

import './App.css';

function App() {
  function signin() {
    var x = document.getElementById('login');
    var y = document.getElementById('signin');
    var z = document.getElementById('btn');
    
    x.style.left = '-400px';
    y.style.left = '50px';
    
    z.style.left = '110px';
    
  }


  var modal = document.getElementById('login-form');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  function login() {
    var x = document.getElementById('login');
    var y = document.getElementById('signin');
    var z = document.getElementById('btn');
    
    x.style.left = '50px';
    y.style.left = '450px';
    
    z.style.left = '0px';
    
  }

  var modal = document.getElementById('login-form');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  return (
    <>
      <div>
        <div className="body">
          <div className="navbar">
          </div>
          <div className="form-box-Login">
            <div className='button-box'>
              <div id="btn"></div>
              <button type='button' onClick={login} className='toggle-btn'>Login</button>
              <button  style={{left: "15px"}} type='button' onClick={signin} className='toggle-btn'>sign-in</button>
            </div>
            <Login />
            <Signin />
          </div>
          <div className="signature text-center">
            <small>&copy; yaser yjjou </small>
          </div>
        </div>
      </div>

    </>

  );
}

export default App;
