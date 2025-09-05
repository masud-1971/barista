import React from 'react'

const FooterPage = () => {
  return (
    <div>
{/* Footer */}

<footer className="site-footer mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-12 me-auto">
        <em className="text-white d-block mb-4">Where to find us?</em>
        <strong className="text-white">
          <i className="bi-geo-alt me-2" />
          Bandra West, Mumbai, Maharashtra 400050, India
        </strong>
        <ul className="social-icon mt-4">
          <li className="social-icon-item">
            <a href="#" className="social-icon-link bi-facebook"></a>
          </li>
          <li className="social-icon-item">
            <a
              href="https://x.com/minthu"
              target="_new"
              className="social-icon-link bi-twitter"
            ></a>
          </li>
          <li className="social-icon-item">
            <a href="#" className="social-icon-link bi-whatsapp"></a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
        <em className="text-white d-block mb-4">Contact</em>
        <p className="d-flex mb-1">
          <strong className="me-2">Phone:</strong>
          <a href="tel: 305-240-9671" className="site-footer-link">
            (65) 305 2409 671
          </a>
        </p>
        <p className="d-flex">
          <strong className="me-2">Email:</strong>
          <a href="mailto:info@yourgmail.com" className="site-footer-link">
            hello@barista.co
          </a>
        </p>
      </div>
      <div className="col-lg-5 col-12">
        <em className="text-white d-block mb-4">Opening Hours.</em>
        <ul className="opening-hours-list">
          <li className="d-flex">
            Monday - Friday
            <span className="underline" />
            <strong>9:00 - 18:00</strong>
          </li>
          <li className="d-flex">
            Saturday
            <span className="underline" />
            <strong>11:00 - 16:30</strong>
          </li>
          <li className="d-flex">
            Sunday
            <span className="underline" />
            <strong>Closed</strong>
          </li>
        </ul>
      </div>
      <div className="col-lg-8 col-12 mt-4">
        <p className="copyright-text mb-0">
          Copyright © Barista Cafe 2048 - Design:{" "}
          <a rel="sponsored" href="https://www.tooplate.com" target="_blank">
            Tooplate
          </a>
        </p>
      </div>
    </div>
  </div>
</footer>
{/* End Footer */}
    </div>
  )
}

export default FooterPage
