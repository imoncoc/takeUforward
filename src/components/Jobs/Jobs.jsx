import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utilities/fakeDB";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";

const Jobs = () => {
  const [data, setData] = useState();
  const [allData, setAllData] = useState();

  useEffect(() => {
    const storedCart = getLocalStorage();
    setData(storedCart);
    setAllData(data);
  }, []);

  console.log(data);

  const handleChange = (item) => {
    if (data) {
      const storedCart = getLocalStorage();
      const newArray = storedCart.filter((it) => it.jobStatus === item);
      setData(newArray);
    } else if (item === "All") {
      setData(allData);
    } else {
      const storedCart = getLocalStorage();
      const newArray = storedCart.filter((it) => it.jobStatus !== item);
      setData(newArray);
    }
  };

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
            <h2 className="take-section-title text-center">Applied Job Page</h2>
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
                onChange={(e) => {
                  console.log("e.target.value", e.target.value);
                  handleChange(e.target.value);
                }}
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option defaultValue>Filter By</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
                <option value="All">Show All</option>
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
