import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 py-3">
            <h5 className="text-info pb-3">More links</h5>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <a href="/allprojects" className="text-light d-block">
              Projects
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact me
            </Link>
          </div>
          {/*<div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus nulla gravida orci a odio sit
              aliquip ut nullam.
            </p>
          </div>*/}
          <div className="col-12 col-md-6 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="https://github.com/ShameekDutta" className="text-light d-block">
              Github
            </a>
            <a href="https://www.linkedin.com/in/shameek-dutta/" className="text-light d-block">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/shameek_dutta7/" className="text-light d-block">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Shameek Dutta 2022</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
