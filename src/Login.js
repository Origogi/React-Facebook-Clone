import { Button } from "@mui/material";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
        />
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/150px-Facebook_Logo_%282019%29.svg.png"
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
