import React, { useState } from 'react'

const Contact = () => {

  let [data, setData] =useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })

  const inputEvent=(event)=>{

    const {name,value}=event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
        
    })
  }
  const formsubmit=(e)=>{
 e.preventDefault();
 alert(`Name : ${data.fullname}. Phone: ${data.phone}. Email : ${data.email}. Message : ${data.msg}`);

  }
  return (
    <>
      <div className="my-5">
        <h2 className="text-center text-info">Contact Us</h2>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formsubmit}>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlInput1">Mobile No.</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter mobile number"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>

              

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                    rows="3"
                  ></textarea>
                </div>

                <button  className='btn btn-outline-info rounded-pill'>Submit Form</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
