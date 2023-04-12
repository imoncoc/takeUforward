import React, { useEffect, useState } from 'react';

import FeaturedJobSingleData from '../FeaturedJobSingleData/FeaturedJobSingleData';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const FeaturedJobs = () => {

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }


  const [featuredJobs, setFeaturedJobs ] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/imoncoc/fake-data/main/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedJobs(data);
      })
      .catch((err) => console.log(err));
  }, []);


  const handleAllData = () =>{
    setShowAll(true);
  }





    return (
      <div className="my-5">
        <div className="take-section-div w-50 text-center">
          <h2 className="take-section-title fs-1">Featured Jobs</h2>
          <p className="take-section-description">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>

        <div className="container">
          <div className="row">
            {featuredJobs
              ?.slice(0, showAll ? featuredJobs.length : 4)
              .map((feature) => (
                <FeaturedJobSingleData
                  key={feature.id}
                  feature={feature}
                ></FeaturedJobSingleData>
              ))}
          </div>
        </div>

        {!showAll && (
          <div className="text-center my-5">
            <button onClick={handleAllData} className="dream-btn-primary">
              See All Jobs
            </button>
          </div>
        )}
      </div>
    );
};

export default FeaturedJobs;