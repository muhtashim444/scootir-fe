import React from "react";

export default function About() {
  return (
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
                <i className="ri-check-double-line"></i>Nutzer können E-Scooter
                mit Token ausleihen
              </li>
              <li>
                <i className="ri-check-double-line"></i> Token können mit einer
                Kryptowährung gekauft werden
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
  );
}
