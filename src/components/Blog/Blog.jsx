import React from 'react';

const Blog = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto my-5 position-relative">
              <img
                className="position-absolute top-0 start-100 translate-middle img-fluid"
                src="https://i.ibb.co/wW52N3g/Vector-1.png"
                alt=""
                style={{
                  marginTop: "-3rem",
                  marginLeft: "-2rem",
                  width: "15rem",
                }}
              />
              <h2 className="take-section-title text-center">
                Blog Page
              </h2>
              <img
                className="position-absolute top-100 start-0 translate-middle img-fluid"
                src="https://i.ibb.co/L8L5rfJ/Vector.png"
                alt=""
                style={{ marginTop: "-3rem", width: "15rem" }}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Blog;