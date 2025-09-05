import React from 'react'
import HeaderBarista from '../components/HeaderBarista'
import FooterPage from './FooterPage'

const ReservationPage = () => {
  return (
    <>
      <HeaderBarista />
      {/* <h1>Reservation Page</h1> */}

    {/* Reservation Section */}
    
        {/* <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="index.html">
              <img
                src="/public/images/coffee-beans.png"
                className="navbar-brand-image img-fluid"
                alt=""
              />
              Barista.co
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_2">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_3">
                    Our Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_4">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.html#section_5">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ms-lg-3">
                <a
                  className="btn custom-btn custom-border-btn"
                  href="reservation.html"
                >
                  Reservation
                  <i className="bi-arrow-up-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </nav> */}
        <section className="booking-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-12 mx-auto">
                <div className="booking-form-wrap">
                  <div className="row">
                    <div className="col-lg-7 col-12 p-0">
                      <form
                        className="custom-form booking-form"
                        action="#"
                        method="post"
                        role="form"
                      >
                        <div className="text-center mb-4 pb-lg-2">
                          <em className="text-white">Fill out the booking form</em>
                          <h2 className="text-white">Book a table</h2>
                        </div>
                        <div className="booking-form-body">
                          <div className="row">
                            <div className="col-lg-6 col-12">
                              <input
                                type="text"
                                name="booking-form-name"
                                id="booking-form-name"
                                className="form-control"
                                placeholder="Full Name"
                                required=""
                              />
                            </div>
                            <div className="col-lg-6 col-12">
                              <input
                                type="tel"
                                className="form-control"
                                name="booking-form-phone"
                                placeholder="Phone: 085 456 7890"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required=""
                              />
                            </div>
                            <div className="col-lg-6 col-12">
                              <input
                                className="form-control"
                                type="time"
                                name="booking-form-time"
                                defaultValue="18:30"
                              />
                            </div>
                            <div className="col-lg-6 col-12">
                              <input
                                type="date"
                                name="booking-form-date"
                                id="booking-form-date"
                                className="form-control"
                                placeholder="Date"
                                required=""
                              />
                            </div>
                            <div className="col-lg-12 col-12">
                              <input
                                type="number"
                                name="booking-form-number"
                                id="booking-form-number"
                                className="form-control"
                                placeholder="Number of People"
                                required=""
                              />
                              <textarea
                                name="booking-form-message"
                                rows={3}
                                className="form-control"
                                id="booking-form-message"
                                placeholder="Comment (Optional)"
                                defaultValue={""}
                              />
                            </div>
                            <div className="col-lg-4 col-md-10 col-8 mx-auto mt-2">
                              <button type="submit" className="form-control">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-5 col-12 p-0">
                      <div className="booking-form-image-wrap">
                        <img
                          src="/public/images/barman-with-fruits.jpg"
                          className="booking-form-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Reservation Section */}
    
    <FooterPage />
    </>
  )
}

export default ReservationPage
