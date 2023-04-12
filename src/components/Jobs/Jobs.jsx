import React, { useEffect, useState } from "react";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { toast } from "react-hot-toast";
import { getShoppingCart } from "../../utilities/fakeDB";
import jobsLoader from "../../loaders/jobsLoader";

const Jobs = () => {
  // const navigation = useNavigation();
  // if (navigation.state === "loading") {
  //   return <LoadingSpinner></LoadingSpinner>;
  // }



  // const [data, setData] = useState([]);
  // const [nodataFound, setNoDataFound] = useState(false);

  // useEffect(() => {
  //   const storedCart = jobsLoader();
  //   setData(storedCart);
  // }, []);

  // console.log(data)


  

  // const handleChange = (item) => {
  //   console.log(item)
  //   if (data) {
  //     const storedCart = useLoaderData();
  //     // console.log(storedCart)
  //     if (item === "Onsite" || item === "Remote") {
  //       const newArray = storedCart.filter((it) => it.jobStatus === item);
  //       setData(newArray);
  //     }
  //     else{
  //       setData(storedCart);
  //     }
  //   }
  //   else{
  //     toast.error("No data Found!");
  //   }
  // };

   const savedAppliedJobs = useLoaderData();
   const [data, setData] = useState(savedAppliedJobs);

   console.log(data);

   const handleFilter = (e) => {
     const filerValue = e.target.value;
     if (filerValue) {
       const filterData = savedAppliedJobs.filter(
         (singleData) => singleData.jobStatus === filerValue
       );

       setData(filterData);
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
                onChange={handleFilter}
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option  value="">Filter By</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
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
          <div className="mb-5"></div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
