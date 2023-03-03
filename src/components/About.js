import React from "react";

function About() {
  return (
    <div className="bg-light my-5">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">About</span> me
        </h1>
        <div className="lead">
          I can develop the front and the back of an app
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What I can do?</h5>
            <p className="text-justify">
              I can develop applications using the MERN stack. I also know the 
              languages Java, C, C++, and Python. Backend comes more naturally to me 
              but I am trying to become more proficient in frontend development
              as well.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What am I doing currently?</h5>
            <p className="text-justify">
              Currently I am pursuing my Btech CSE degree from SRMIST and I am
              in my third year. I am also working as a freelance backend developer
              for an app and undergoing an internship as software developer at a
              startup organisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;
