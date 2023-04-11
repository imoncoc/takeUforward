import React from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

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
              <h2 className="take-section-title text-center">Blog Page</h2>
              <img
                className="position-absolute top-100 start-0 translate-middle img-fluid"
                src="https://i.ibb.co/L8L5rfJ/Vector.png"
                alt=""
                style={{ marginTop: "-3rem", width: "15rem" }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            
            <div className="col-10 col-sm-12 mx-auto my-5">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      #1 When should you use context API ?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong className='active'>Contest API: </strong> Context is primarily used
                      when some data needs to be accessible by many components
                      at different nesting levels. Apply it sparingly because it
                      makes component reuse more difficult. If you only want to
                      avoid passing some props through many levels, component
                      composition is often a simpler solution than context.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      #2 What is Custom Hook ?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong className='active'>Custom Hook: </strong> Custom React JS hooks are
                      reusable functions that a React JS software developer can
                      use to add special and unique functionality to the React
                      applications. Usually, if there is a requirement to add a
                      feature, one can install a third-party library and solve
                      the problem.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      #3 What is useRef?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong className='active'>useRef:</strong> useRef is a built-in React hook
                      that accepts one argument as the initial value and returns
                      a reference . A reference is an object having a special
                      property current .
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      #4 what is useMemo hook?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong className='active'>useMemo:</strong> React has a built-in hook called
                      useMemo that allows you to memoize expensive functions so
                      that you can avoid calling them on every render. You
                      simple pass in a function and an array of inputs and
                      useMemo will only recompute the memoized value when one of
                      the inputs has changed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Blog;