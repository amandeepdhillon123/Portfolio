import React from "react";
import "./About.css";
import Img from "../../assets/ama.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Img} alt="" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              officiis commodi illo nihil culpa voluptates! Placeat corporis
              pariatur laboriosam nostrum sunt, ullam necessitatibus impedit
              quaerat deleniti illo qui dolorem perspiciatis? ut itaque
              doloribus. .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
