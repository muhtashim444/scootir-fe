import React from "react";
import css from "./style2.css";
import axios from "axios";
import { NavLink, Redirect } from "react-router-dom";

export default function Login() {
  const [email, setemail] = React.useState("");
  const [pwd, setpwd] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);

  const getLoginId = async () => {
    try {
      let response = await fetch(`/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: pwd,
        }),
      });
      if (response.status == 200) {
        console.log("RECEIVED EMAIL");
        localStorage.setItem("email", email);
        console.log("email stored");
        setloggedIn(true);
      }

      // let response = await fetch(`/wallet`, {
      //   method: "GET",
      // });

      // let response = await axios.get("/wallet", {
      //   email: email,
      // });
      console.log("RESPONSE==========", await response);

      // axios
      //   .post(`http://localhost:3001/login`, { email: email, password: pwd })
      //   .then((res) => {
      //     console.log(res);
      //     console.log(res.data);
      //   });

      // console.log("RESPONSE=====", response);
    } catch (error) {
      console.log(error);
    }
  };
  // {
  //   loggedIn ? return(<Redirect to="/" />) : return(<Redirect to="/login" />);
  // }
  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <section className="wrapper fadeInDown" style={{ padding: "10%" }}>
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
        <h2 className="active"> Login </h2>
        {/* <!-- Icon --> */}
        <div className="fadeIn first">
          {/* <img
            src="http://danielzawadzki.com/codepen/01/icon.svg"
            id="icon"
            alt="User Icon"
          ></img> */}
        </div>

        {/* <!-- Login Form --> */}
        <div>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
          ></input>
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={getLoginId}
          ></input>
        </div>

        {/* <!-- Remind Passowrd --> */}
        {/* <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div> */}
      </div>
    </section>
  );
}
