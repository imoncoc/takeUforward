import React from 'react';
import { Link } from 'react-router-dom';
import menImg  from '../../assets/allImg/men.png'
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { toast } from 'react-hot-toast';

const Home = () => {

  const handleGetStarted = () => {
    return toast.success("Comming soon 👏");
  };

    return (
      <>
        <div className="container mb-5">
          <div className="row d-flex flex-row-reverse">
            <div className="col-10 col-md-6 mx-auto">
              <img className="img-fluid" src={menImg} alt="" />
            </div>
            <div
              className="col-10 col-md-6 mx-auto 
          align-self-center pe-5 text-center text-md-start"
            >
              <div className="mt-5">
                <h2 className="dream-home-title fs-1 fw-bolder">
                  One Step <br /> Closer To Your <br />
                  <span className="active">Dream Job</span>
                </h2>
                <p className="dream-home-description">
                  Explore thousands of job opportunities with all the
                  information you need. Its your future. Come find it. Manage
                  all your job application from start to finish.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="dream-btn-primary"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </>
    );
};

export default Home;