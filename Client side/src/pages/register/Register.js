import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();

  const handleClick = async(e)=>{
    e.preventDefault();

    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      confirmPasswordRef.current.setCustomValidity("Passwords do not match");
    }else{
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      try{
        await axios.post('auth/register', user)
        navigate('/login')
      }catch(err){
        console.log(err);
      }
      
    }
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
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={usernameRef}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              type="email"
              ref={emailRef}
              className="loginInput"
              required
            />
            <input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              className="loginInput"
              required
              minLength={'6'}
            />
            <input
              placeholder="Password Again"
              type="password"
              ref={confirmPasswordRef}
              className="loginInput"
              required
              minLength={'6'}
            />
            <button type="submit" className="loginButton">
              Sign Up
            </button>

            <button className="loginRegisterButton">
              Log into your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
