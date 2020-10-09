import React from "react";
import chair from "../../../../images/chair.png";
const HeaderMain = () => {
  return (
    <main
      style={{ height: "600px", width: "100%" }}
      className="row d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          voluptatem odio fugit ullam voluptate rem culpa rerum molestias vero
          ut dolorum iste illum molestiae, quisquam similique quos est. Harum
          sit inventore ea repellat officia aliquam accusantium, totam
          praesentium odio soluta culpa corporis nostrum minus distinctio.
          Molestiae dolores sapiente voluptatem reiciendis!
        </p>
        <button className="btn btn-primary">GET APPOINMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
