import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <div className="main-body">
        <center>
          <div>
            <h1 className="heading">Quiz App</h1>
          </div>
          <div>
            <Link to={"./quiz"}>
              <button className="play-btn">
                <h3 className="play">Play</h3>
              </button>
            </Link>
          </div>
        </center>
      </div>
    </div>
  );
};

export default HomeComponent;
