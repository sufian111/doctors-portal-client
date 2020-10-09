import React from "react";
import Fluoride from "../../../images/fluride.png";
import Cavity from "../../../images/cavity.png";
import whiteening from "../../../images/wehiteening.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
const serviceData = [
  {
    name: "Fluoride Treatment",
    img: Fluoride,
  },
  {
    name: "Cavity Filling",
    img: Cavity,
  },
  {
    name: "Teeth Whiteening",
    img: whiteening,
  },
];
const Services = () => {
  return (
    <section className="services-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <div className="w-75 row">
          {serviceData.map((info) => (
            <ServiceDetails info={info}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
