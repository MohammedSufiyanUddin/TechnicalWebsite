import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 py-3">
        <div className="card shadow">
          <img src={props.imgurl} className="img-fluid" alt="card_img" />
          <div className="card-body">
            <h5>{props.title}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              harum.
            </p>
            <button className="btn btn-outline-info">
              More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
