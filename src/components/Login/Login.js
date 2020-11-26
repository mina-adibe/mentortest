import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/images/clock2.svg";
import projects from "../../assets/images/projects.png";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg__clippath}>
          <div className={styles.bg__clippath__sec}></div>
        </div>
        <div className={styles.navbar}>
          <img src={logo} alt="logo" />
          <h2>Myteam</h2>
        </div>
        <div>
          <div className={styles.grid}>
            <div className={styles.col1}>
              <h2>The easiest tracking solution is here !</h2>
              <p>
                Employee time tracking software with screenshots, reporting and
                automated payments.
              </p>
              <form>
                <label for="email">Email</label> <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="write your name"
                ></input>
                <br />
                <label for="password">Password</label> <br />
                <input
                  type="password"
                  id="password"
                  name="pass"
                  placeholder="**********"
                ></input>
                <br />
                <button type="submit">Login</button>
                <p>forget password ?</p>
              </form>
            </div>
            <div className={styles.col2}>
              <img src={projects} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
