import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [email, setemail] = React.useState("");
  const [ethers, setethers] = React.useState("");
  const [tokens, settokens] = React.useState("");
  const [rewardedtokens, setrewardedtokens] = React.useState("");

  const getWalletDetails = async () => {
    try {
      let myemail = await localStorage.getItem("email");
      console.log("==============", myemail);

      let response = await axios.post("/wallet", {
        email: myemail,
      });

      setethers(response.data.balance);
      settokens(response.data.tokens);
      setrewardedtokens(response.data.rewardedBalance);
      console.log("RESPONSE==========", response);
    } catch (error) {
      console.log(error);
    }
  };

  const buyMore = async () => {
    try {
      let response = await fetch(`/buymore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      });

      // let response = await fetch(`/wallet`, {
      //   method: "GET",
      // });
      let ress = await response.json();
      // console.log("BUYMORE==========", await response.json());
      // console.log("BUYMORE==========", await response.json());

      setethers(ress.balance);
      settokens(ress.tokens);
      setrewardedtokens(ress.rewardedBalance);
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

  useEffect(() => {
    let email = localStorage.getItem("email");

    setemail(email);
    return () => {};
  }, []);

  return (
    <div>
      <div id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* 
            <!-- <h1 className="logo mr-auto"><a href="index.html">Scootir</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo --> */}
          <a href="index.html" className="logo mr-auto">
            <img
              src="assets/img/OneDrive-2020-10-31/fullLogo.png"
              alt=""
              className="img-fluid"
            />
          </a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
                {/* <a href="parkingzones.html">Parking Zones</a> */}
              </li>
              {/* <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li> */}
              <li>
                <NavLink to="/services" exact>
                  E-Scooters
                </NavLink>
              </li>
              <li>
                <NavLink to="/parking" exact>
                  Parking Zones
                </NavLink>
                {/* <a href="parkingzones.html">Parking Zones</a> */}
              </li>
              {/* <li>
                <NavLink to="/unrent" exact>
                  Un-Rent
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/login" exact>
                  Login
                </NavLink>
                {/* <a href="parkingzones.html">Parking Zones</a> */}
              </li>
              <li>
                <NavLink to="/signup" exact>
                  Sign Up
                </NavLink>
                {/* <a href="parkingzones.html">Parking Zones</a> */}
              </li>

              {/* <!-- <li><a href="#portfolio">Portfolio</a></li> -->
                    <!-- <li><a href="#Wallet">Wallet</a></li> --> */}

              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </nav>
          {/* <!-- .nav-menu -->
            <a href="#" type="button" className="get-started-btn" data-toggle="modal" data-target="#myModal" className="get-started-btn">Wallet</a>
            <!-- <button type="button" className="get-started-btn" data-toggle="modal" data-target="#myModal">
                Open modal
              </button> --> */}
          <a
            href="#"
            type="button"
            className="get-started-btn"
            data-toggle="modal"
            data-target="#myModal"
            className="get-started-btn"
            onClick={getWalletDetails}
          >
            Wallet
          </a>
          {/* <a
            href="#"
            type="button"
            className="get-started-btn"
            data-toggle="modal"
            data-target="#myModal"
            className="get-started-btn"
          >
            Sign Up
          </a> */}
          {/* <NavLink
            className="get-started-btn"
            className="get-started-btn"
            to="/signup"
            exact
          >
            Sign Up
          </NavLink>
          <NavLink
            className="get-started-btn"
            className="get-started-btn"
            to="/login"
            exact
          >
            Login
          </NavLink> */}

          <p style={{ marginLeft: "2%" }}>
            {email}
            {/* <a href="parkingzones.html">Parking Zones</a> */}
          </p>
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h1 className="modal-title">My Wallet</h1>
              {/* <!-- <a href="#" type="button" className="get-started-btn">Buy More Tokens</a> --> */}

              <a
                href="#"
                title="1 Ether = 10 Tokens"
                className="get-started-btn"
                data-toggle="popover"
                data-trigger="hover"
                data-content="Click the button to buy 10 tokens"
                onClick={buyMore}
              >
                Buy More Tokens
              </a>

              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <div className="row">
                <table className="table table-light table-hover">
                  <thead className="thead">
                    <tr>
                      <th>Ethers</th>
                      <th>Tokens</th>
                      <th>Rewarded Tokens</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{ethers}</td>
                      <td>{tokens}</td>
                      <td>{rewardedtokens}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="danger"></div>
              <div className="row">
                <h2>Last Rides</h2>
                <table className="table table-light table-hover">
                  <thead className="thead">
                    <tr>
                      <th>Date And Time</th>
                      <th>Parking Zone</th>
                      <th>Reward</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11/7/2020</td>
                      <td>Side walk</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>11/7/2020</td>
                      <td>Zone 2</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>11/7/2020</td>
                      <td>Side Walk</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
