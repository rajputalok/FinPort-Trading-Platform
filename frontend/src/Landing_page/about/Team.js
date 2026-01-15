import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted "
        style={{ lineHeight: "1.9", fontSize: "1em" }}
      >
        <div className="col-6 text-center mt-5 p-5">
          <img
            src="media/images/AlokSingh.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h4 className="mt-3">Alok Kumar Singh</h4>
          <h6>Founder & Developer - FinPort</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            FinPort is an educational fintech project built to understand how
            modern trading and portfolio management platforms are designed and
            developed. This project focuses on creating a clean user interface,
            smooth navigation, and real-world trading workflows inspired by
            popular brokerage platforms
          </p>
          <p>
            Through FinPort, I explored frontend engineering concepts such as
            component-based architecture, state management, responsive design,
            and user experience optimization for financial applications. The
            goal of this project is purely learning and skill demonstration, not
            real trading or financial advice.
          </p>
          <p>
            Building FinPort helped me strengthen my problem-solving skills and
            gain hands-on experience in developing scalable, production-like web
            interfaces.
          </p>
          <p>
            Interests: UI engineering, fintech platforms, system design, and
            clean frontend architecture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
