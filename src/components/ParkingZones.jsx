import React from "react";
import ReactJsAlert from "reactjs-alert";

export default function ParkingZones() {
  const [open, setOpen] = React.useState(false);

  const rentScooter = async () => {
    try {
      let response = await fetch(`/rent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: localStorage.getItem("email"),
        }),
      });
      setOpen(true);

      // setethers(response.data.balance);
      // settokens(response.data.tokens);
      // setrewardedtokens(response.data.rewardedBalance);
      console.log("RESPONSE==========", response);
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
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
              <div class="figure-caption text-center">
                A caption for the above image.
              </div>
            </figure>
          </a>
        </div>
      </div>
      <ReactJsAlert
        type="success" // success, warning, error, info
        title="Rented Successfully." // title you want to display
        status={open} // true or false
        color="#1d36ad"
        Close={() => setOpen(false)} // callback method for hide
      />
    </section>
  );
}
