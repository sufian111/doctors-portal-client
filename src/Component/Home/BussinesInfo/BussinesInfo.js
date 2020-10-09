import React from "react";
import InfoCart from "../InfoCart/InfoCart";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const infoData = [
  {
    title: "Opening Hours",
    deescription: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Vist Our location",
    deescription: "Brooklyn, NY 10003 USA",
    icon: faMapMarker,
    background: "dark",
  },
  {
    title: "Call us now",
    deescription: "+15058416344",
    icon: faPhone,
    background: "primary",
  },
];
const BussinesInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row ">
        {infoData.map((info) => (
          <InfoCart info={info}></InfoCart>
        ))}
      </div>
    </section>
  );
};

export default BussinesInfo;
