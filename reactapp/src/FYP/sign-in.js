import React from 'react';
function Signin() {
    
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
    return (
        <div>
            <div className="body">
                <div className="navbar">
                </div>
                <div className="form-box-Signin">
                    <div className='button-box'>
                        <div id="btn" ></div>
                        <button type='button' onClick={signin} className='toggle-btn'>sign In</button>
                    </div>


                    <div className='izaha'></div>
                    <div id='signin' className='input-group-register' action="connect.php" method="post" >
                    <input type='text' id="FirstName" className='input-field' placeholder='First Name' required />
                    <input type='text' id="LastName" className='input-field' placeholder='Last Name ' required />
                    <input type='email' id="Email" className='input-field' placeholder='Email' required />
                    <input type='password' id="Enter" className='input-field' placeholder='Enter Password' required />
                    <input type='password' id="Confirm" className='input-field' placeholder='Confirm Password' required />
                    <input type='checkbox' id="checkbox" className='check-box' /><span>I agree to the terms and conditions</span>
                    <input type='submit' id="submit" className='submit-btn' value='Sign-in' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;