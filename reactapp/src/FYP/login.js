
import React from 'react';

function Login() {



    return (

        <div id='login' className='input-group-login' action="connect.php" method="post" >
            <input type='text' id="Email" className='input-field' placeholder='Enter Email' required />
            <input type='password' id="password" className='input-field' placeholder='Enter Password' required />
            <br/>
            <input type='checkbox' id="checkbox" className='check-box' /><span> Remember Me Ý </span>

            <button type='submit' className='submit-btn'>Login</button>

        </div>

    )

}
function Signin() {


    return (

        <div id='signin' className='input-group-register' action="connect.php" method="post" >
            <input type='text' id="FirstName" className='input-field' placeholder='First Name' required />
            <input type='text' id="LastName" className='input-field' placeholder='Last Name ' required />
            <input type='email' id="Email" className='input-field' placeholder='Email' required />
            <input type='password' id="Enter" className='input-field' placeholder='Enter Password' required />
            <input type='password' id="Confirm" className='input-field' placeholder='Confirm Password' required />
            <br/>
            <input type='checkbox' id="checkbox" className='check-box' /><span>I agree to the terms and conditions</span>
            <input type='submit' id="submit" className='submit-btn' value='Sign in' />
        </div>
      
    )
}
export { Login, Signin };



