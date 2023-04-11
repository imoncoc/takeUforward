import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utilities/fakeDB';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';

const Jobs = () => {
    const [data, setData] = useState();
    
    useEffect(() => {
      const storedCart = getLocalStorage();
      setData(storedCart);
    }, []);

    console.log(data)

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
                Applied Job Page
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

        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-12 mx-auto text-end d-flex justify-content-between">
              <div></div>
              <div className="" style={{ width: "10rem" }}>
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Filter By</option>
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                </select>
              </div>
            </div>
            {data &&
              data.map((dataDetails) => (
                <AppliedJobsDetails
                  key={dataDetails.id}
                  dataDetails={dataDetails}
                ></AppliedJobsDetails>
              ))}
          </div>
        </div>
      </>
    );
};

export default Jobs;