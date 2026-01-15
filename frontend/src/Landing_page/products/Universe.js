import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 border-top">
      <div className="row text-center mt-5">
        <h1>The FinPort Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/ThemeNest.jpeg" style={{width:"45%"}} />
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/AlgoForge.jpeg" style={{width:"45%"}} />
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/OptionIq.jpeg" style={{width:"45%"}}/>
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/PortiqAMC.jpeg"style={{width:"45%"}} />
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/BondBridge.jpeg" style={{width:"45%"}}/>
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/coverWise.jpeg" style={{width:"45%"}}/>
          <p className="text-small text-muted" style={{marginTop:"15px"}}>Insurance</p>
        </div>
        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-3"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
