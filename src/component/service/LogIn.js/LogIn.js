import React, { useState, useEffect } from "react";
import axios from "axios";

function LogIn() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleUserPw = (e) => {
    setUserPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
  };

  useEffect(() => {
    axios
      .get("url")
      .then((res) => console.log(res))
      .catch();
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input type="email" placeholder="ooo@oooo" value={userId} onChange={handleUserId} />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input type="password" value={userPw} onChange={handleUserPw} />
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LogIn;
