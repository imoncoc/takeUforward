import React from 'react';
import './JobCategoryDetails.css'

const JobCategoryDetails = ({ category }) => {
  const { id, image, job_title, available_jobs } = category;
  return (
    <>
      <div
        key={category.id}
        className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto  p-5 text-center text-lg-start"
      >
        <div>
          <img className="job-category-details-icon" src={image} alt="" />
        </div>
        <h2 className="job-category-details-title">{job_title}</h2>
        <p className="job-category-details-available">{available_jobs}+ Jobs Available</p>
      </div>
    </>
  );
};

export default JobCategoryDetails;