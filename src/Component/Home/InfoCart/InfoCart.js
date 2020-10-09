import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCart.css";
const InfoCart = (props) => {
  const { title, icon, background, deescription } = props.info;

  return (
    <div className="col-md-4 text-white">
      <div
        className={`d-flex justify-content-center info-container info-${background}`}
      >
        <div className="pr-4">
          <FontAwesomeIcon className="info-icon" icon={icon} />
        </div>
        <div>
          <h6>{title}</h6>
          <small>{deescription}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
