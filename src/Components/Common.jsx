import React from 'react';
import "./Common.css";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="">
                    {props.title}
                    <span className="brand-name text-info text-justify">
                      {" "}
                      M.s.Technology
                    </span>
                  </h2>
                  <h3 className="my-3 text-muted">
                    we are the team of talented devloper making website
                  </h3>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn border-info rounded-pill"
                    >
                      {props.btName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    className="img-fluid rounded-pill animated"
                    src={props.img}
                    alt="Image 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common
