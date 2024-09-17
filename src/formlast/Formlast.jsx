import React from "react";
import "./formlast.css";
import Formlastlogo from "../assets/images/formlast.png";
import Form from "../banner/Formpage";
import twofifftyK from "../assets/images/250k.png";
import thumb from "../assets/images/thumb.png";

function Formlast() {
  return (
    <div
      className="formlast-container"
      style={{  backgroundColor: "#D2E6E4" }}
    >
      <div
        className="formlast-image"
        style={{
          backgroundImage: `url(${Formlastlogo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="formlastthumb"
          style={{
            width: "88px",
            height: "88px",
            backgroundImage: `url(${thumb})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginLeft: "73%",
            marginTop: "32%",
          }}
        ></div>
        <div
          className="formlastcount"
          style={{
            width: "300px",
            height: "100px",
            backgroundImage: `url(${twofifftyK})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "0%",
          }}
        ></div>
      </div>
      <div className="formlast-content">
        <Form />
      </div>
    </div>
  );
}

export default Formlast;