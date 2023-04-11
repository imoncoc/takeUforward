import React from 'react';
import './AppliedJobsDetails.css'
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({dataDetails}) => {
    const {
      companyLogo,
      companyName,
      jobTitle,
      address,
      salary,
      employmentType,
      jobStatus
    } = dataDetails;
    console.log(dataDetails)
    return (
      <>
        <div className="col-10 col-sm-12 mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center details-container">
            {/* Section 1 */}
            <div className="d-flex">
              <div className="details-img-container">
                <img src={companyLogo} alt="" />
              </div>
              <div className="ms-4 align-self-center">
                <p className="details-title my-0">{jobTitle}</p>
                <p className="details-description my-0">{companyName}</p>
                <div className="my-2">
                  <button className="take-btn-secondary me-3">
                    <span className="active">{employmentType}</span>
                  </button>
                  <button className="take-btn-secondary">
                    <span className="active">{jobStatus}</span>
                  </button>
                </div>
                <div className="d-flex text-muted">
                  <p>
                    {" "}
                    <span>
                      <MapPinIcon className="details-icon" />
                    </span>{" "}
                    {address}
                  </p>
                  <p className="ms-5">
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
              <Link to='/'>
                <button className="dream-btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default AppliedJobsDetails;