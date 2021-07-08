import React, { useState } from 'react'


export default function Contacthome() {
  const newRecodrs = "";
  const [userRegistration, SetuserRegistration] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""

  });
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetuserRegistration({ ...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecodrs = { ...userRegistration }
console.log(newRecodrs);
var data = {username: 'example'};
    fetch('http://localhost/modish-online/react/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(
        (result) => {

          console.log(result);

        },
        (error) => {
          console.log(error);

        }
      )

  }
  console.log(newRecodrs);

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                </div>
              </div>
            </div>

          </div>


          <div className="col-lg-6">
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" onChange={HandleInput} value={userRegistration.name} name="name" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" onChange={HandleInput} value={userRegistration.email} className="form-control" name="email" id="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" onChange={HandleInput} value={userRegistration.subject} className="form-control" name="subject" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" onChange={HandleInput} value={userRegistration.message} name="message" rows="5" placeholder="Message"></textarea>
              </div>
              {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div> */}
              <div className="text-center"><button type="submit" className="btn btn-primary">Send Message</button></div>

            </form>
          </div>

        </div>

      </div>
    </section>


  )
}
