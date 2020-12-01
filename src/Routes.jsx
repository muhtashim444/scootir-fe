import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ParkingZone from "./components/ServicesPage";
import ServicesPage from "./components/ParkingZones";
import UnrentBike from "./components/UnrentBike";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
// import Slider from "./components/Slider";
// import Layout from "./modules/shared/Layout/Layout";
// import AddFile from "./modules/AddFileComponent/AddFileComponent";
// import Home from "./modules/HomeComponent/HomeComponent";
// import FilesListComp from "../src/modules/FilesListComp/FilesListComp";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/parking" component={ParkingZone} />
      <Route exact path="/unrent" component={UnrentBike} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
