import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import {useContext, useRef} from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleClick = (e)=>{
    e.preventDefault();
    loginCall({email: emailRef.current.value, password: passwordRef.current.value}, dispatch)

  }

  console.log(user)
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
            <button className="loginButton" disabled={isFetching}>{isFetching? <CircularProgress sx={{color:"white"}} size="20px"/>: "Log In"}</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
            {isFetching? <CircularProgress sx={{color:"white"}} size="20px"/>: "Create a new account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
