import React from 'react';
import './AppliedJobsDetails.css'
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({dataDetails}) => {
    const {
      id,
      companyLogo,
      companyName,
      jobTitle,
      address,
      salary,
      employmentType,
      jobStatus
    } = dataDetails;
    // console.log(dataDetails)
    return (
      <>
        <div className="col-10 col-sm-12 mx-auto my-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center details-container">
            {/* Section 1 */}
            <div className="d-flex flex-column flex-md-row">
              <div className="details-img-container d-flex justify-content-center align-items-center">
                <img src={companyLogo} alt="" />
              </div>
              <div className="ms-4 align-self-center mt-3 mt-md-0">
                <p className="details-title my-0 text-center text-md-start">
                  {jobTitle}
                </p>
                <p className="details-description my-0 text-center text-md-start">
                  {companyName}
                </p>
                <div className="my-2 text-center text-md-start">
                  <button className="take-btn-secondary me-3">
                    <span className="active">{employmentType}</span>
                  </button>
                  <button className="take-btn-secondary">
                    <span className="active">{jobStatus}</span>
                  </button>
                </div>
                <div className=" d-md-flex text-muted">
                  <p className="text-center text-md-start">
                    {" "}
                    <span>
                      <MapPinIcon className="details-icon" />
                    </span>{" "}
                    {address}
                  </p>
                  <p className="ms-md-5 text-center text-md-center">
                    <span>
                      <CurrencyDollarIcon className="details-icon" />
                    </span>
                    Salary: {salary}
                  </p>
                </div>
              </div>
            </div>
            {/* Section 2 */}
            <div>
              <Link to={`/detail/${id}`}>
                <button className="dream-btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default AppliedJobsDetails;