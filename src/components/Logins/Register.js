import './Login.css'
import { useState } from 'react';
import myLogo from '../../assets/LogoZRecruiters-removebg-preview.png'
export function Register(){
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };
    return(
        <>
            <div className='Register'>
                <div id="container" className={`container containerSignUp ${isSignUpActive ? 'right-panel-active' : ''}`}>
                    <div class="form-container sign-up-container">
                        <form action="#">
                        <a href='/' style={{textDecoration:"none"}}><h5 className='myLogo'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                        </svg><img src={myLogo} height={60} width={80}></img>ZRecruiters</h5>
                        </a>
                            <h2>Create Account</h2>
                            {/* <span className="spanSignUp">or use your email for registration</span> */}
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />                        
                            <input type="password" placeholder="Re-Enter Password" />
                            <div style={{alignItems:"center"}}>
                            <button className="btn btn-light myBtn myBtnLogin ">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                        <a href='/'  style={{textDecoration:"none"}}><h5 className='myLogo'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
                        </svg><img src={myLogo} height={60} width={80}></img>ZRecruiters</h5>
                        </a>
                            <h2 className='headerTop'>Sign in</h2>
                            {/* <span className="spanSignUp">or use your account</span> */}
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <div style={{alignItems:"center"}}>
                                <button className="btn btn-light myBtn myBtnLogin " >Log In</button>
                            </div>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1  style={{color:"orange"}}>Welcome Back!</h1>
                                <p className="signUpParagraph">To keep connected with us please login with your personal info</p>
                                <button class="btnSignUp ghost" id="signIn" onClick={handleSignInClick}>Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h2 style={{color:"orange"}}>Hello,</h2>
                                <h5>Dont have an account Yet?</h5>
                                <p className="signUpParagraph">Enter your personal details and start journey with us</p>
                                <button class="btnSignUp host" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}