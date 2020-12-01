import React from "react";

export default function Slider() {
  return (
    <div id="hero">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">
          {/* <!-- Slide 1 --> */}
          <div
            className="carousel-item active"
            style={{
              backgroundImage: require("../../public/assets/img/wisam/3cover.jpg"),
            }}
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  Willkommen bei <span />
                  Scootir
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Scootir ist eine Plattform, die auf der Blockchain basiert und
                  deine Daten sicher und anonym behandelt. Zudem besteht die
                  Möglichkeit aktiv mitzumachen und dafür belohnt zu werden.
                  Mach mit und deine Stadt wird zu einem besseren Ort!{" "}
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div
            className="carousel-item"
            style="background-image: url(assets/img/wisam/cover2.jpg)"
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  Willkommen bei <span />
                  Scootir
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Scootir ist eine Plattform, die auf der Blockchain basiert und
                  deine Daten sicher und anonym behandelt. Zudem besteht die
                  Möglichkeit aktiv mitzumachen und dafür belohnt zu werden.
                  Mach mit und deine Stadt wird zu einem besseren Ort!{" "}
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div
            className="carousel-item"
            style="background-image: url(assets/img/wisam/4cover.jpg)"
          >
            <div className="carousel-container">
              <div className="container">
                <h2 className="animate__animated animate__fadeInDown">
                  Willkommen bei <span />
                  Scootir
                </h2>
                <p className="animate__animated animate__fadeInUp">
                  Scootir ist eine Plattform, die auf der Blockchain basiert und
                  deine Daten sicher und anonym behandelt. Zudem besteht die
                  Möglichkeit aktiv mitzumachen und dafür belohnt zu werden.
                  Mach mit und deine Stadt wird zu einem besseren Ort!
                </p>
                <a
                  href="#about"
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon icofont-simple-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon icofont-simple-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
