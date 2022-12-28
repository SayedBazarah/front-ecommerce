import { useRef, useState, useEffect, useContext } from "react";
import Style from "./style.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../../context/AuthProvider";
import jwt_decode from "jwt-decode";

const LOGIN_URL = "/user/login";

function LoginForm() {
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response.data?.token);
      setEmail("");
      setPassword("");
      router.back();
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Email or Password is wrong");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  }
  return (
    <div className={Style.container}>
      <section>
        <p
          ref={errRef}
          className={errMsg ? Style.errmsg : Style.offscreen}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="off"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="pasword"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button>Sign In</button>
        </form>
        <div>
          Need an Account? <br />
          <span className={Style.line}>
            <Link href="/register">Sign Up</Link>
          </span>
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
