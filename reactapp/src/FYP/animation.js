import React, { useState } from "react";
class Animation extends React.Component {
    render() {
        return (
            
            function LoginForm() {
                const [isLoginVisible, setIsLoginVisible] = useState(true);

                function showSignin() {
                    setIsLoginVisible(false);
                }

                function showLogin() {
                    setIsLoginVisible(true);
                }

                return (
                    <div>
                        <div className="login" style={{ left: isLoginVisible ? "50px" : "-400px" }}>
                            {/* Login form content here */}
                        </div>
                        <div className="signin" style={{ left: isLoginVisible ? "450px" : "50px" }}>
                            {/* Signin form content here */}
                        </div>
                        <button
                            id="btn"
                            style={{ left: isLoginVisible ? "0px" : "110px" }}
                            onClick={isLoginVisible ? showSignin : showLogin}
                        >
                            {isLoginVisible ? "Login" : "Signin"}
                        </button>
                    </div>
                );
            }

        )
    }
}
export default Animation;
