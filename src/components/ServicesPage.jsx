import React from "react";
import ReactJsAlert from "reactjs-alert";

export default function ServicesPage() {
  const [open, setOpen] = React.useState(false);

  const parkScootir = async () => {
    try {
      let response = await fetch(`/reward`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      });
      // if (response.status == 200) {
      //   console.log("RECEIVED EMAIL");
      //   localStorage.setItem("email", email);
      //   console.log("email stored");
      //   setloggedIn(true);
      // }

      // let response = await fetch(`/wallet`, {
      //   method: "GET",
      // });

      // let response = await axios.get("/wallet", {
      //   email: email,
      // });

      setOpen(true);
      console.log("RESPONSE==========", await response.json());

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
                  A caption for the above image.
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
                  A caption for the above image.
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
                  A caption for the above image.
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
                  A caption for the above image.
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
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
                  src="assets/img/wisam/parkingzone5.jpg"
                  class="figure-img img-fluid rounded Pkzone"
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  A caption for the above image.
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
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
                  src="assets/img/wisam/parkingzone3.jpg"
                  class="figure-img img-fluid rounded Pkzone "
                  alt="A generic square placeholder image with rounded corners in a figure."
                />
                <figcaption class="figure-caption text-center">
                  A caption for the above image.
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
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
