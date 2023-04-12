import React from 'react';
import './FeaturedJobSingleData.css'
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const FeaturedJobSingleData = ({feature}) => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }


    const {address, companyLogo, companyName, contactNumber, description, educationalRequirements, employmentType
, gmail, id, jobRequirements, jobStatus, jobTitle, responsibility, salary} = feature;


    return (
      <div className="col-10 col-md-6 mx-auto m-3 d-flex flex-column justify-content-between">
        <div className="card p-5 d-flex justify-content-around" style={{minHeight: "450px"}}>
          <div className="">
            <img
              className="mb-4 img-fluid"
              style={{ width: "10rem" }}
              src={companyLogo}
              alt=""
            />
          </div>
          <div>
            <h3 className="feature-single-data-jobTitle">{jobTitle}</h3>
            <p className="feature-single-data-companyName">{companyName}</p>
            <div className="mb-3">
              <button className="take-btn-secondary me-3 mb-3 mb-sm-0">
                <span className="active">{jobStatus}</span>
              </button>
              <button className="take-btn-secondary">
                <span className="active">{employmentType}</span>
              </button>
            </div>
            <div className="d-flex flex-column flex-sm-row">
              <p className="me-1 me-md-5 ">
                <span>
                  <MapPinIcon className="feature-single-data-icon" />{" "}
                </span>
                {address}
              </p>
              <p>
                {" "}
                <span>
                  <CurrencyDollarIcon className="feature-single-data-icon" />{" "}
                </span>{" "}
                Salary: &nbsp; {salary}
              </p>
            </div>

            <Link to={`detail/${id}`}>
              <button className="dream-btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default FeaturedJobSingleData;