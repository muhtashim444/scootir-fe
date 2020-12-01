import React from "react";

export default function services() {
  return (
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          {/* <!-- <h2>Services</h2> --> */}
          <a href="e-scooters.html">
            <p>Check unsere E-Scooter </p>
          </a>
        </div>

        <div class="row">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <a href="e-scooters.html">
              <figure class="figure">
                <img
                  src="assets/img/wisam/1.jpg"
                  class="figure-img img-fluid rounded bx-tada-hover"
                  alt="A generic square placeholder image with rounded corners in a figure."
                ></img>
                <figcaption class="figure-caption text-center">
                  Scooter
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a href="e-scooters.html">
              <figure class="figure">
                <img
                  src="assets/img/wisam/8.jpg"
                  class="figure-img img-fluid rounded bx-tada-hover"
                  alt="A generic square placeholder image with rounded corners in a figure."
                ></img>
                <figcaption class="figure-caption text-center">
                  SCooter 2
                </figcaption>
              </figure>
            </a>
          </div>

          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <a href="e-scooters.html">
              <figure class="figure">
                <img
                  src="assets/img/wisam/1.jpg"
                  class="figure-img img-fluid rounded bx-tada-hover"
                  alt="A generic square placeholder image with rounded corners in a figure."
                ></img>
                <figcaption class="figure-caption text-center">
                  Scooter 3
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
