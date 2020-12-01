import React from "react";

export default function Counts() {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="icofont-simple-smile"></i>
              <span data-toggle="counter-up">32</span>
              <p>
                Glückliche Nutzer sind bereits über unsere Plattform registriert{" "}
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
  );
}
