import React, { useState } from "react";
import css from "./style2.css";
import ReactJsAlert from "reactjs-alert";
const SERVER_END_POINT = "http://localhost:3001";

export default function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [open, setOpen] = React.useState(false);

  const signUp = async () => {
    try {
      const response = await fetch(`/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: pwd,
        }),
      });
      setOpen(true);

      console.log("RESPONSE===", await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="wrapper fadeInDown" style={{ padding: "10%" }}>
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
        <h2 className="active"> Sign up </h2>
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
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={pwd}
            onChange={(e) => setpwd(e.target.value)}
          ></input>
          <input
            type="submit"
            className="fadeIn fourth"
            value="Sign up"
            onClick={signUp}
          ></input>
        </div>

        {/* <!-- Remind Passowrd --> */}
        {/* <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div> */}
      </div>
      <ReactJsAlert
        type="success" // success, warning, error, info
        title="Parked Successfully." // title you want to display
        status={open} // true or false
        color="#1d36ad"
        Close={() => setOpen(false)} // callback method for hide
      />
    </section>
  );
}
