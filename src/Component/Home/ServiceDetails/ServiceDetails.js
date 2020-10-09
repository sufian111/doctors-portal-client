import React from "react";

const ServiceDetails = (props) => {
  const { name, img } = props.info;
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "50px" }} src={img} alt="" />
      <h5 className="mt-3">{name} </h5>
      <p className="text-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, hic.
      </p>
    </div>
  );
};

export default ServiceDetails;
