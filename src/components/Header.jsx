import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import ReactJsAlert from "reactjs-alert";

export default function Header() {
  const [email, setemail] = React.useState("");
  const [ethers, setethers] = React.useState("");
  const [tokens, settokens] = React.useState("");
  const [rewardedtokens, setrewardedtokens] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [date1, setDate1] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [date3, setDate3] = React.useState("");
  const [parking1, setParking1] = React.useState("");
  const [parking2, setParking2] = React.useState("");
  const [parking3, setParking3] = React.useState("");
  const [statusre, setStatusre] = React.useState("");

  const getWalletDetails = async () => {
    try {
      let myemail = await localStorage.getItem("email");
      setemail(myemail);

      console.log("==============", myemail);

      let response = await axios.post(
        "https://e-scootir-backend.herokuapp.com/wallet",
        {
          email: localStorage.getItem("email"),
        }
      );
      if (response.data.activity.length != 0) {
        //1
        setDate1(response.data.activity[0].time);
        setParking1(response.data.activity[0].parkingZone);

        //2
        setDate2(response.data.activity[1].time);
        setParking2(response.data.activity[1].parkingZone);

        //3
        setDate3(response.data.activity[2].time);
        setParking3(response.data.activity[2].parkingZone);
      }

      // let date = new Date().toDateString();
      // setDate1(date);
      // console.log("DATE==========================", date);

      // let rides = await axios.post(
      //   "https://sccotir-backend.herokuapp.com/wallet",
      //   {
      //     email: localStorage.getItem("email"),
      //   }
      // );

      // console.log("RIDES====",rides)

      setethers(response.data.balance);
      settokens(response.data.tokens);
      setrewardedtokens(response.data.rewardedBalance);
      console.log("RESPONSE==========", response);
      if (response) {
        setStatusre("Yes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyMore = async () => {
    try {
      let response = await fetch(
        `https://e-scootir-backend.herokuapp.com/buymore`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
          }),
        }
      );

      // let email = localStorage.getItem("email");

      // let response = await fetch(`https://sccotir-backend.herokuapp.com/wallet`, {
      //   method: "GET",
      // });
      let ress = await response.json();
      // console.log("BUYMORE==========", await response.json());
      // console.log("BUYMORE==========", await response.json());

      setethers(ress.balance);
      settokens(ress.tokens);
      setrewardedtokens(ress.rewardedBalance);
      // let response = await axios.get("https://sccotir-backend.herokuapp.com/wallet", {
      //   email: email,
      // });
      console.log("RESPONSE==========", await response.json());

      // axios
      //   .post(`http://localhost:3001https://sccotir-backend.herokuapp.com/login`, { email: email, password: pwd })
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
  }, [localStorage.getItem("email")]);

  return (
    <div>
      <div id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          {/* 
            <!-- <h1 className="logo mr-auto"><a href="index.html">Scootir</a></h1> -->
            <!-- Uncomment below if you prefer to use an image logo --> */}
          <Link to="/" className="logo mr-auto">
            <img
              src="assets/img/OneDrive-2020-10-31/fullLogo.png"
              alt=""
              className="img-fluid"
            />
          </Link>

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
          <Link
            to="/"
            type="button"
            className="get-started-btn"
            className="get-started-btn"
            onClick={() => {
              localStorage.clear();
              setOpen(true);
            }}
          >
            Logout
          </Link>
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

          <p style={{ marginLeft: "2%" }}>{email}</p>
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
                      <td>{date1}</td>
                      <td>{parking1}</td>
                      <td>{statusre}</td>
                    </tr>
                    <tr>
                      <td>{date2}</td>
                      <td>{parking2}</td>
                      <td>{statusre}</td>
                    </tr>
                    <tr>
                      <td>{date3}</td>
                      <td>{parking3}</td>
                      <td>{statusre}</td>
                    </tr>

                    {/* <tr>
                      <td>11/7/2020</td>
                      <td>Zone 2</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>11/7/2020</td>
                      <td>Side Walk</td>
                      <td>No</td>
                    </tr> */}
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
      <ReactJsAlert
        type="warning" // success, warning, error, info
        title="Logged out."
        status={open}
        quote="Please login to use our services"
        Close={() => setOpen(false)}
      />
    </div>
  );
}
