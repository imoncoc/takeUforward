import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
      <div className="footer-container">
        <div className="container">
          <div className="row text-white ">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3  mx-auto my-5 text-center text-sm-start">
              <h3>
                Take
                <span className="active">U</span>
                forward
              </h3>
              <p className="footer-description">
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
              <div>
                <img src="https://i.ibb.co/z7B3wb7/Group-9969.png" alt="" />
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-2 mx-auto my-5 text-center text-sm-end text-md-center text-lg-start">
              <h3>Product</h3>
              <div>
                <p className="footer-description">Prototype</p>
                <p className="footer-description">Plans & Pricing</p>
                <p className="footer-description">Customers</p>
                <p className="footer-description">Integrations</p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-3 col-lg-2 mx-auto my-5 text-center text-sm-start text-md-end text-lg-start">
              <h3>Company</h3>
              <div>
                <p className="footer-description">About Us</p>
                <p className="footer-description">Work</p>
                <p className="footer-description">Latest News</p>
                <p className="footer-description">Careers</p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-3 col-lg-2 mx-auto my-5 text-center text-sm-end text-md-start text-lg-start">
              <h3>Support</h3>
              <div>
                <p className="footer-description">Help Desk</p>
                <p className="footer-description">Sales</p>
                <p className="footer-description">Become a Partner</p>
                <p className="footer-description">Developers</p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-3 col-lg-3 mx-auto my-5 text-center text-sm-center text-md-end text-lg-start">
              <h3>Contact</h3>
              <div>
                <p className="footer-description">524 Broadway, NYC</p>
                <p className="footer-description">+17777-978-5570</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;