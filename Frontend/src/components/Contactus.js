import React, { useEffect, useState } from 'react';
import "./ContactUs.css";

function Contactus() {

  const [userData, setUserData] = useState({fname:"", email:"", phone:"", message:""});

  const callProfilePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData({...userData, fname:userData.fname, email:userData.email, phone:userData.phone, message:userData.message});

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callProfilePage();
  }, []);

  const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData, [name]:value});
  }

  const contactForm = async (e) => {
    e.preventDefault();
    const { fname, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, phone,message
      })
    });

    const data = await res.json();

    if (!data) {   
      console.log("Contact form NOTT sent");
    } else { 
      alert("Message Sent") 
      console.log("Contact form sent");
       setUserData({...userData, message:""})
    }
  }

  return (
    <>
      {/* <!-- ======= Get in touch Section ======= --> */}
      <section className="hero-section inner-page">

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center hero-text">
                  <h1 data-aos="fade-up" data-aos-delay="0">
                    Get in touch
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">

          <div className="col-4 order-md-2 order-sm-2 order-none-2">
            <div className="container box" data-aos="fade-up">
              <p className="social">
                <div className="symbol first">

                  <table>
                    <tr>
                      <td><a href="#"><span className="bi bi-envelope"></span></a></td>
                      <td><h4 className="a">devvashi@gmail.com</h4></td>
                    </tr>
                  </table>

                </div>
                <div className="symbol">

                  <table>
                    <tr>
                      <td><a href="#"><span className="bi bi-phone"></span></a></td>
                      <td><h4 className="a">9408895799</h4></td>
                    </tr>
                  </table>

                </div>
                <div className="symbol">

                  <table>
                    <tr>
                      <td><a href="#"><span className="bi bi-linkedin"></span></a></td>
                      <td><h4 className="a">dskdhaf</h4></td>
                    </tr>
                  </table>

                </div>
                <div className="symbol">

                  <table>
                    <tr>
                      <td> <a href="#"><span className="bi bi-instagram"></span></a></td>
                      <td><h4 className="a">@sdksjdfh</h4></td>
                    </tr>
                  </table>

                </div>
              </p>
            </div>

          </div>
          <div className="col order-md-1 order-sm-1 order-xs-1">

            {/* <!-- ======= Contact Details Section ======= --> */}
            <div className="container box" data-aos="fade-up">

              <form id="enterinfo" class="row form-control-lg" method="POST">
                <div class="col-12 mt-3 mb-2">
                  <input type="text" class="form-control" id="inputAddress" value={userData.fname} name="fname"
                  onChange={handleInputs}
                   placeholder="Your Name" />
                </div>
                <div class="col-md-6 mt-2 mb-2">

                  <input type="email" class="form-control" id="inputEmail4" value={userData.email} name="email"
                  onChange={handleInputs}
                   placeholder=" Your E-mail" />
                </div>
                <div class="col-md-6 mt-2 mb-2">

                  <input type="text" class="form-control" id="inputPassword4" value={userData.phone}  name="phone"
                  onChange={handleInputs}

                    placeholder="Your Mobile" />
                </div>
                <div class=" col-12 mt-2 mb-2 ">
                  <textarea class="form-control"  name="message"
                  onChange={handleInputs}
                   placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  {/* <label for="floatingTextarea">Comments</label> */}
                </div>
                <div class="col-12 mt-2 mb-2">
                  <button type="submit" className="btn btn-outline-light" onClick={contactForm}><b>Send Message </b></button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>

      {/* <!-- ======= Testimonials Section ======= --> */}
      <section className="section border-top border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-4">
              <h2 className="section-heading">Review From Our Users</h2>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <div
                className="testimonials-slider swiper"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review text-center">
                      <p className="stars">
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill muted"></span>
                      </p>
                      <h3>Excellent App!</h3>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eius ea delectus pariatur, numquam aperiam
                          dolore nam optio dolorem facilis itaque voluptatum
                          recusandae deleniti minus animi, provident voluptates
                          consectetur maiores quos.
                        </p>
                      </blockquote>

                      <p className="review-user">
                        <img
                          src="assets/img/person_1.jpg"
                          alt="Image"
                          className="img-fluid rounded-circle mb-3"
                        />
                        <span className="d-block">
                          <span className="text-black">Jean Doe</span>, &mdash;
                          App User
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                  <div className="swiper-slide">
                    <div className="review text-center">
                      <p className="stars">
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill muted"></span>
                      </p>
                      <h3>This App is easy to use!</h3>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eius ea delectus pariatur, numquam aperiam
                          dolore nam optio dolorem facilis itaque voluptatum
                          recusandae deleniti minus animi, provident voluptates
                          consectetur maiores quos.
                        </p>
                      </blockquote>

                      <p className="review-user">
                        <img
                          src="assets/img/person_2.jpg"
                          alt="Image"
                          className="img-fluid rounded-circle mb-3"
                        />
                        <span className="d-block">
                          <span className="text-black">Johan Smith</span>,
                          &mdash; App User
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                  <div className="swiper-slide">
                    <div className="review text-center">
                      <p className="stars">
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill"></span>
                        <span className="bi bi-star-fill muted"></span>
                      </p>
                      <h3>Awesome functionality!</h3>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eius ea delectus pariatur, numquam aperiam
                          dolore nam optio dolorem facilis itaque voluptatum
                          recusandae deleniti minus animi, provident voluptates
                          consectetur maiores quos.
                        </p>
                      </blockquote>

                      <p className="review-user">
                        <img
                          src="assets/img/person_3.jpg"
                          alt="Image"
                          className="img-fluid rounded-circle mb-3"
                        />
                        <span className="d-block">
                          <span className="text-black">Jean Thunberg</span>,
                          &mdash; App User
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonials Section --> */}

      {/* <!-- ======= CTA Section ======= --> */}
      <section className="section cta-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 me-auto text-center text-md-start mb-5 mb-md-0">
              <h2>Collaborte with Us!</h2>
            </div>
            <div className="col-md-5 text-center text-md-end">
              <p>
                <a href="#" className="btn d-inline-flex align-items-center">
                  {/* <i className="bx bxl-apple"></i> */}
                  <span>Join now!</span>
                </a>{" "}

              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End CTA Section --> */}
    </>
  );
}

export default Contactus;
