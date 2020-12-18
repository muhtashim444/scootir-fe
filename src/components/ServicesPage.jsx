import React from "react";
import ReactJsAlert from "reactjs-alert";
const SERVER_DOMAIN = "http://localhost:5000";

export default function ServicesPage() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  // const [reward, setreward] = React.useState(false);

  const parkScootir = async () => {
    try {
      let myemail = await localStorage.getItem("email");
      if (!myemail) {
        setOpen2(true);
        return;
      } else {
        let response = await fetch(`${SERVER_DOMAIN}/reward`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
            noReward: false,
          }),
        });

        if (response.status == 200) {
          setOpen(true);
          return;
        }
        setOpen4(true);

        console.log("RESPONSE==========", await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const parkScootirNo = async () => {
    try {
      let myemail = await localStorage.getItem("email");
      if (!myemail) {
        setOpen2(true);
        return;
      } else {
        let response = await fetch(`${SERVER_DOMAIN}/reward`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: localStorage.getItem("email"),
            noReward: true,
          }),
        });

        if (response.status == 200) {
          setOpen3(true);
          return;
        }
        setOpen4(true);

        console.log("RESPONSE==========", await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="#" class="">
      <div class="container" data-aos="fade-up" style={{ marginTop: "2%" }}>
        <div class="section-title">
          <p>Parking zones</p>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={parkScootir}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure ">
                <img
                  src="assets/img/wisam/pkTobi1.png"
                  class="figure-img img-fluid rounded Pkzone"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  Parking zone
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={parkScootir}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure">
                <img
                  src="assets/img/wisam/pktobi2.png"
                  class="figure-img img-fluid rounded Pkzone"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  Parking zone
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
            onClick={parkScootir}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure">
                <img
                  src="assets/img/wisam/pkobi3.png"
                  class="figure-img img-fluid rounded Pkzone "
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  Parking zone
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="100"
            onClick={parkScootir}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure">
                <img
                  src="assets/img/wisam/pktobi4.png"
                  class="figure-img img-fluid rounded Pkzone"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  Parking zone
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={parkScootirNo}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure">
                <img
                  src="assets/img/wisam/parkingzone1.jpg"
                  class="figure-img img-fluid rounded Pkzone"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  No parking zone
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
            onClick={parkScootirNo}
          >
            <a
              href="#"
              type="button"
              data-toggle="modal"
              data-target="#getescooter"
            >
              <figure class="figure">
                <img
                  src="assets/img/wisam/parkingzone3.jpg"
                  class="figure-img img-fluid rounded Pkzone "
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  No parking zone
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
      <ReactJsAlert
        type="warning" // success, warning, error, info
        title="Parked Successfully."
        status={open}
        quote="You are parking this e-scootir"
        Close={() => setOpen(false)}
      />
      <ReactJsAlert
        type="error" // success, warning, error, info
        title="Please Login First."
        status={open2}
        quote="You can not park before login"
        Close={() => setOpen2(false)}
      />

      <ReactJsAlert
        type="error" // success, warning, error, info
        title="Parked Successfully With No Reward"
        status={open3}
        quote="No reward is given to you as you are not parking in specified parking zones"
        Close={() => setOpen3(false)}
      />

      <ReactJsAlert
        type="error" // success, warning, error, info
        title="Can not park,"
        status={open4}
        quote="You are not renting any sootir"
        Close={() => setOpen4(false)}
      />
    </section>
  );
}
