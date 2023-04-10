import React, { useState } from 'react';
import './JobCategory.css'

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([]);
    return (
      <div className='my-5'>
        <div className='take-section-div w-50 text-center'>
          <h2 className='take-section-title fs-1'>Job Category List</h2>
          <p className='take-section-description'>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
    );
};

export default JobCategory;