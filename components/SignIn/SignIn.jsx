"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

// assuming password is not allowed with spaces.
// special chars, numbers, alphabets
const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.\\~-]+$/;

const USERNAME = "test@luxpmsoft.com";
const PASSWORD = "test1234!";
function SignIn() {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: {},
  });
  useEffect(() => {}, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    // regex for password
    if (!PASSWORD_REGEX.test(e.target.password.value)) {
      setState({ error: { password: "Wrong combination" } });
    }
    if (
      e.target.username.value === USERNAME &&
      e.target.password.value === PASSWORD
    ) {
      console.log(`SUCCESS`);
      window.location.href = "/blank";
    } else {
      alert("the provided password is wrong");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <input
          name="username"
          className="username overlap-group-2"
          placeholder="USERNAME"
          type="text"
        />
        <input
          name="password"
          className="password overlap-group-2"
          placeholder="PASSWORD"
          type="password"
          // pattern: "^[a-zA-Z0-9!@#$%^&*()_+{}[]:;<>,.?~\\-]*$",
        />
        <span className="password-error">{state.error.password}</span>

        <button className="login-btn">
          <div className="login-wrapper">
            <div className="login">LOGIN</div>
          </div>
        </button>
        <div className="text-wrapper-2">Forgot password?</div>
        <img className="group" alt="Group" src="/cart.svg" />
      </form>
    </div>
  );
}
export { SignIn };
