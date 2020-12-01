import React from "react";

export default function UnrentBike() {
  return (
    <section class="jumbotron" style={{ marginTop: "4%" }}>
      <h5>Your are renting @Black12 E-Scooter from 5:35 PM</h5>
      <div
        class="col-lg-4 col-md-6 d-flex  align-items-stretch "
        data-aos="zoom-in"
        data-aos-delay="100"
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
            <figcaption class="figure-caption text-center">
              {" "}
              <button type="button" class="btn btn-success">
                Un-Rent this E-Scooter
              </button>
            </figcaption>
          </figure>
        </a>
      </div>
    </section>
  );
}
