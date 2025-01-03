import "./login.css";
import {useRef} from 'react'

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleClick = (e)=>{
    e.preventDefault();

  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">socialsss</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on socialsss{" "}
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input placeholder="Email" type="email"className="loginInput" ref={emailRef} required/>
            <input placeholder="Password" type="password" className="loginInput" ref={passwordRef} required minLength="6"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
