import React, { useState } from 'react';
import './FeaturedJobDetails.css'
import { useLoaderData } from 'react-router-dom';
import vector1 from '../../assets/allImg/Vector-1.png' 
import vector2 from '../../assets/allImg/Vector.png' 
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { addToDb } from '../../utilities/fakeDB';

const FeaturedJobDetails = () => {
    const singleData = useLoaderData();
    
    const {
      address,
      companyLogo,
      companyName,
      contactNumber,
      description,
      educationalRequirements,
      employmentType,
      gmail,
      id,
      jobRequirements,
      jobStatus,
      jobTitle,
      responsibilities,
      salary,
      contactPhone,
      contactEmail
    } = singleData;

    console.log(singleData)

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto my-5 position-relative">
              <img
                className="position-absolute top-0 start-100 translate-middle img-fluid"
                src={vector1}
                alt=""
                style={{
                  marginTop: "-3rem",
                  marginLeft: "-2rem",
                  width: "15rem",
                }}
              />
              <h2 className="take-section-title text-center">Job Details</h2>
              <img
                className="position-absolute top-100 start-0 translate-middle img-fluid"
                src={vector2}
                alt=""
                style={{ marginTop: "-3rem", width: "15rem" }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto text-start my-5">
              <p className="take-section-description">
                <span className="fw-bold text-black">Job Description: </span>
                {description}
              </p>
              <p className="take-section-description">
                <span className="fw-bold text-black">Job Responsibility: </span>
                {responsibilities}
              </p>
              <p className="take-section-description">
                <span className="fw-bold text-black">
                  Job Educational Requirements:{" "}
                </span>
                {educationalRequirements}
              </p>

              <p className="take-section-description">
                <span className="fw-bold text-black">Experiences:: </span>
                {jobRequirements}
              </p>
            </div>
            <div className="col-10 col-md-4 mx-auto my-5">
              <div className="take-job-details">
                <p className="take-job-details-title">Job Details</p>
                <div className="take-job-details-divider"></div>
                <div className="d-flex">
                  <CurrencyDollarIcon className="take-job-details-icon" />
                  <p className="take-section-description ">
                    <span className="take-job-details-title-title">
                      Salary:{" "}
                    </span>
                    {salary} (Per Month)
                  </p>
                </div>
                <div className="d-flex">
                  <BriefcaseIcon className="take-job-details-icon" />
                  <p className="take-section-description m-0">
                    <span className="take-job-details-title-title">
                      Job Title:{" "}
                    </span>
                    {jobTitle}
                  </p>
                </div>
                <p className="take-job-details-title mt-4">
                  Contact Information
                </p>
                <div className="take-job-details-divider"></div>
                <div className="d-flex mt-4">
                  <PhoneIcon className="take-job-details-icon" />
                  <p className="take-section-description m-0">
                    <span className="take-job-details-title-title">
                      Phone:{" "}
                    </span>
                    {contactPhone}
                  </p>
                </div>
                <div className="d-flex my-3">
                  <EnvelopeIcon className="take-job-details-icon" />
                  <p className="take-section-description m-0">
                    <span className="take-job-details-title-title">
                      Email:{" "}
                    </span>
                    {contactEmail}
                  </p>
                </div>
                <div className="d-flex my-3">
                  <MapPinIcon className="take-job-details-icon" />
                  <p className="take-section-description m-0">
                    <span className="take-job-details-title-title">
                      Address:{" "}
                    </span>
                    {address}
                  </p>
                </div>
              </div>

              <button
                onClick={() => addToDb(singleData)}
                className="dream-btn-primary w-100 my-3"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default FeaturedJobDetails;