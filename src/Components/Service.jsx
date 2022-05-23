import React from 'react'
import Card from './Card';
import { CardInfo } from './CardInfo';
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center text-info">Our Services</h2>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex justify-content-center">
              {
                CardInfo.map((val, ind)=>{
                  return <Card key={ind} imgurl={val.imgurl} title={val.title} />
                })
              }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service
