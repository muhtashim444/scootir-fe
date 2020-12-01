import React, { useState } from "react";
import slider1 from "../wisam/4cover.jpg";
import slider2 from "../wisam/cover2.jpg";
import slider3 from "../wisam/3cover.jpg";
import image from "../wisam/whyus.jpg";
import Modal from "react-modal";

export default function Home() {
  const [open, setopen] = useState(false);
  return (
    <div>
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
                      <td>50</td>
                      <td>50</td>
                      <td>3</td>
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

      <div id="hero">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide 1 --> */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(${slider3})` }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Willkommen bei <span />
                    Scootir
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Scootir ist eine Plattform, die auf der Blockchain basiert
                    und deine Daten sicher und anonym behandelt. Zudem besteht
                    die Möglichkeit aktiv mitzumachen und dafür belohnt zu
                    werden. Mach mit und deine Stadt wird zu einem besseren Ort!{" "}
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
              style={{ backgroundImage: `url(${slider2})` }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Willkommen bei <span />
                    Scootir
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Scootir ist eine Plattform, die auf der Blockchain basiert
                    und deine Daten sicher und anonym behandelt. Zudem besteht
                    die Möglichkeit aktiv mitzumachen und dafür belohnt zu
                    werden. Mach mit und deine Stadt wird zu einem besseren Ort!{" "}
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
              style={{ backgroundImage: `url(${slider1})` }}
              // style={{backgroundImage: require("assets/img/wisam/4cover.jpg")}}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Willkommen bei <span />
                    Scootir
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Scootir ist eine Plattform, die auf der Blockchain basiert
                    und deine Daten sicher und anonym behandelt. Zudem besteht
                    die Möglichkeit aktiv mitzumachen und dafür belohnt zu
                    werden. Mach mit und deine Stadt wird zu einem besseren Ort!{" "}
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
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>About Us</p>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                AScootir ist ein E-Scooter Verleih welcher auf der Blockchain
                basiert
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line"></i>Es gibt ein
                  Belohnungssystem für Nutzer, wenn sie den E-Scooter in einer
                  Parkzone platzieren{" "}
                </li>
                <li>
                  <i className="ri-check-double-line"></i>Nutzer können
                  E-Scooter mit Token ausleihen
                </li>
                <li>
                  <i className="ri-check-double-line"></i> Token können mit
                  einer Kryptowährung gekauft werden
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Mit Scootir bist du anonym und sicher unterwegs. Deine Daten
                werden nicht gespeichert und können nicht nachverfolgt werden –
                der Blockchain sei Dank! Durch den Wegfall eines Intermediäres
                zahlst du auch noch weniger. Und jetzt kommts: bei jeder Fahrt,
                die du in einer Parkzone beendest, verdienst du dir einen Token,
                den du später einlösen kannst
              </p>
              <p>
                Du willst genauer wissen, was passiert?
                <br /> Dann klicke auf „Erfahre mehr“
              </p>
              <a href="#" className="btn-learn-more">
                Erfahre mehr
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-simple-smile"></i>
                <span data-toggle="counter-up">32</span>
                <p>
                  Glückliche Nutzer sind bereits über unsere Plattform
                  registriert{" "}
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-kids-scooter"></i>
                <span data-toggle="counter-up">90</span>
                <p>Fahrten wurden bereits mit Scootir durchgeführt </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-designfloat"></i>
                <span data-toggle="counter-up">407</span>
                <p>Token wurden bereits erworben </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-win-trophy"></i>
                <span data-toggle="counter-up">52</span>
                <p>
                  Fahrten wurden zuletzt mit einem Token für richtiges Parken
                  belohnt
                </p>
                <a href="#">Find out more &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
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

      <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-5 align-items-stretch video-box"
              style={{ backgroundImage: `url(${image})` }}
              data-aos="zoom-in"
              data-aos-delay="100"
            ></div>

            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
              <div className="content">
                <h3>
                  Blockchainbasierte E-Scooter mit <strong>Scootir</strong>
                </h3>
                <p>
                  Wir wollen die Nutzer mit einem Belohnungssystem dazu
                  animieren, die E-Scooter in bestimmten Zonen zu parken. Wir
                  verfolgen den Smart City Ansatz und wollen zusammen mit den
                  BürgerInnen eine lebenswertere Stadt schaffen.
                </p>
              </div>

              <div className="accordion-list">
                <ul>
                  <li>
                    <a
                      data-toggle="collapse"
                      className="collapse"
                      href="#accordion-list-1"
                    >
                      <span>01</span> Wie kann ich einen E-Scooter ausleihen?
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1"
                      className="collapse show"
                      data-parent=".accordion-list"
                    >
                      <p>
                        Nutzer können den E-Scooter mit Tokens ausleihen. Eine
                        Fahrt kostet mindestens 3 Token, nach 10 Minuten maximal
                        6 Token.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#accordion-list-2"
                      className="collapsed"
                    >
                      <span>02</span> Wie kriege ich Token?
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-2"
                      className="collapse"
                      data-parent=".accordion-list"
                    >
                      <p>
                        Token können mit einer Kryptowährung gekauft werden.
                        Aktuell nutzen wir Ether. Weitere Währungen sind im
                        Gespräch
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#accordion-list-3"
                      className="collapsed"
                    >
                      <span>03</span> Wie funktioniert das Belohnungssystem?
                      <i className="bx bx-chevron-down icon-show"></i>
                      <i className="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-3"
                      className="collapse"
                      data-parent=".accordion-list"
                    >
                      <p>
                        Der E-Scooter muss nach Fahrtende in einer der vielen
                        Parkzonen abgestellt werden. Mittels GPS-Übertragung
                        wird geprüft, ob der E-Scooter wirklich am richtigen
                        Platz steht. Ist dies der Fall, wird dem Nutzer ein
                        Token in sein Wallet transferiert, welches er für
                        weitere Fahrten nutzen kann. Die Token lassen sich nicht
                        wieder auszahlen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <p>Frequently Asked Questions</p>
          </div>

          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>Was ist ein Token? </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Ein Token ist eine Ersatzwährung, die es uns ermöglicht, deine
                Fahrten einfach und sicher abzurechnen. „Token sind grundlegende
                Bausteine für Operationen mit Kryptowerten: Nur, wer ein
                gültiges Token besitzt, darf eine Transaktion auf der
                zugehörigen Blockchain ausführen.“{" "}
              </p>
            </div>
          </div>
          {/* <!-- End F.A.Q Item--> */}

          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>Wie viel kostet eine Fahrt? </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Die Kosten einer Fahrt variieren und sind abhängig von der
                Dauer. Eine Fahrt benötigt zwischen 3 und 6 Token. Prinzipiell
                brauchst du aber 10 Tokens, die dir vorab abgezogen und nach
                Fahrtende verrechnet werden. Aktuell haben drei Token einen Wert
                von 1€. Du zahlst also maximal 2€ für eine Fahrt. Sofern du den
                E-Scooter in einer Parkzone abstellst, wirst du für deine gute
                Tat sogar belohnt!{" "}
              </p>
            </div>
          </div>
          {/* <!-- End F.A.Q Item--> */}

          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>Kann ich Tokens auch wieder verkaufen? </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Tokens können nicht verkauft werden, sind aber unbegrenzt und
                zeitlich ohne Limit nutzbar{" "}
              </p>
            </div>
          </div>
          {/* <!-- End F.A.Q Item--> */}

          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>
                Kann ich die Tokens auch für etwas anderes als eine Fahrt
                nutzen?{" "}
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Tokens sollen auch bei Partnern, beispielsweise deinem
                Sushi-Laden um die Ecke, nutzbar sein. Wir sind hier aktuell in
                Gesprächen und halten dich auf dem Laufenden{" "}
              </p>
            </div>
          </div>
          {/* <!-- End F.A.Q Item--> */}

          <div
            className="row faq-item d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="col-lg-5">
              <i className="bx bx-help-circle"></i>
              <h4>
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </h4>
            </div>
            <div className="col-lg-7">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </div>
          {/* <!-- End F.A.Q Item--> */}
        </div>
      </section>

      <section id="contact" className="contact section-bg col-12">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>scootir@web.de </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
