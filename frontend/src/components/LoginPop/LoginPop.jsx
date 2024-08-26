import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPop = ({ setshowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [State, setState] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onlogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    console.log(newUrl);
    if (State === "signup") {
      newUrl += "/api/user/register";
    }
    if(State === "login"){
      newUrl += "/api/user/login";
    }
    console.log(State);
    console.log(newUrl);

    const response = await axios.post(newUrl, data);
    console.log(response);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowLogin(false);
      toast.success("User is Logged in")
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onlogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{State}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {State === "login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="username"
            />
          )}

          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">
          {State === "signup" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {State === "login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setState("signup")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setState("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPop;
