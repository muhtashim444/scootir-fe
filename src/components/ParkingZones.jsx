import React from "react";
import ReactJsAlert from "reactjs-alert";
const SERVER_DOMAIN = "https://sccotir-backend.herokuapp.com";

export default function ParkingZones() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [reward, setReward] = React.useState(false);

  const rentScooter = async () => {
    try {
      let myemail = await localStorage.getItem("email");
      if (!myemail) {
        setOpen2(true);
        return;
      } else {
        let response = await fetch(`${SERVER_DOMAIN}/rent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
          }),
        });
        let resss = await response.json();
        console.log("==================================", resss);
        if (response.status == 200) {
          setOpen(true);
        } else if (response.status == 201) {
          setOpen3(true);
        }
        // setethers(response.data.balance);
        // settokens(response.data.tokens);
        // setrewardedtokens(response.data.rewardedBalance);
        // console.log("RESPONSE==========", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section class="container" data-aos="fade-up" style={{ marginTop: "2%" }}>
      <div class="section-title">
        <p>Check our E-Scooters</p>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/1.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-1</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/8.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-2</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/1.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-3</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/4.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-4</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/5.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-5</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/9.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-6</div>
            </figure>
          </a>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/1.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-7</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/8.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-8</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/1.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-9</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/4.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-10</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="200"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/5.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-11</div>
            </figure>
          </a>
        </div>

        <div
          class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          onClick={rentScooter}
        >
          <a
            href="#"
            type="button"
            data-toggle="modal"
            data-target="#getescooter"
          >
            <figure class="figure">
              <img
                src="assets/img/wisam/9.jpg"
                class="figure-img img-fluid rounded bx-tada-hover"
                alt="A generic square placeholder image with rounded corners in a figure."
              />
              <div class="figure-caption text-center">E-Scootir-12</div>
            </figure>
          </a>
        </div>
      </div>
      <ReactJsAlert
        type="info" // success, warning, error, info
        title="Rented Successfully."
        status={open}
        quote="You are renting this e-scootir"
        Close={() => setOpen(false)}
      />
      <ReactJsAlert
        type="error" // success, warning, error, info
        title="Please Login First."
        status={open2}
        quote="You can not rent this e-scootir"
        Close={() => setOpen2(false)}
      />
      <ReactJsAlert
        type="error" // success, warning, error, info
        title="Please Buy More Tokens."
        status={open3}
        quote="You can not rent this e-scootir"
        Close={() => setOpen3(false)}
      />
    </section>
  );
}
