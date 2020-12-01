import React from "react";
import image from "../wisam/whyus.jpg";

export default function whyus() {
  return (
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
                Wir wollen die Nutzer mit einem Belohnungssystem dazu animieren,
                die E-Scooter in bestimmten Zonen zu parken. Wir verfolgen den
                Smart City Ansatz und wollen zusammen mit den BürgerInnen eine
                lebenswertere Stadt schaffen.
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
                      Fahrt kostet mindestens 3 Token, nach 10 Minuten maximal 6
                      Token.
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
                      Parkzonen abgestellt werden. Mittels GPS-Übertragung wird
                      geprüft, ob der E-Scooter wirklich am richtigen Platz
                      steht. Ist dies der Fall, wird dem Nutzer ein Token in
                      sein Wallet transferiert, welches er für weitere Fahrten
                      nutzen kann. Die Token lassen sich nicht wieder auszahlen.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
