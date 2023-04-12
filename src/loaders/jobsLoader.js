import { getShoppingCart } from "../utilities/fakeDB";


const jobsLoader = async () => {
  const loadedJobs = await fetch(
    "https://raw.githubusercontent.com/imoncoc/fake-data/main/jobs.json"
  );
  const jobs = await loadedJobs.json();

  // if cart is in database, you have to use async await
  const savedAplliedJobs = getShoppingCart();
  const savedJobs = [];

  for (const id in savedAplliedJobs) {
    const exist = jobs.find((singleJob) => singleJob.id === id);
    if (exist) {
      savedJobs.push(exist);
    }
  }
  console.log(savedJobs)
  return savedJobs;
};

export default jobsLoader;
