import React, { useEffect, useState } from 'react';
import './JobCategory.css'
import { useLoaderData } from 'react-router-dom';
import JobCategoryDetails from '../JobCategoryDetails/JobCategoryDetails';

const JobCategory = () => {
    const [jobsCategory, setJobsCategory] = useState()

    useEffect(()=>{
      fetch(
        "https://raw.githubusercontent.com/imoncoc/fake-data/main/category.json"
      )
        .then((res) => res.json())
        .then((data) => setJobsCategory(data))
        .catch((error) => console.log(error))
    }, [])









    return (
      <div className="my-5">
        <div className="take-section-div w-50 text-center">
          <h2 className="take-section-title fs-1">Job Category List</h2>
          <p className="take-section-description">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="container">
          <div className="row">
            {jobsCategory &&
              jobsCategory.map((category) => (
                <JobCategoryDetails
                  key={category.id}
                  category={category}
                ></JobCategoryDetails>
              ))}
          </div>
        </div>
      </div>
    );
};

export default JobCategory;