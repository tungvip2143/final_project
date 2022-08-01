import React from "react";
import Products from "../Products";

const Home = () => {
  //! Render
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          width="100%"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5
              className="card-title display-3 fw-bolder mb-0"
              style={{
                textShadow: "white 0px 5px 10px, rgb(211 173 127) 0px 0px 5px",
              }}
            >
              NEW SEASON ARRIVALS
            </h5>
            <p
              className="card-text lead fs-2"
              style={{
                textShadow: "white 0px 5px 10px, rgb(211 173 127) 0px 0px 10px",
              }}
            >
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
