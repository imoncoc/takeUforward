import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Statistics = () => {
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
  }

  
  const [data, setData] = useState();

  useEffect(()=>{
    fetch(
      "https://raw.githubusercontent.com/imoncoc/fake-data/main/rechartAssignment.json"
    )
    .then((res) => res.json())
    .then((data)=> setData(data))
    .catch((error)=>console.log(error))
  }, [])



    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto my-5 position-relative">
              <img
                className="position-absolute top-0 start-100 translate-middle img-fluid"
                src="https://i.ibb.co/wW52N3g/Vector-1.png"
                alt=""
                style={{
                  marginTop: "-3rem",
                  marginLeft: "-2rem",
                  width: "15rem",
                }}
              />
              <h2 className="take-section-title text-center">
                Statistics &nbsp; Page
              </h2>
              <img
                className="position-absolute top-100 start-0 translate-middle img-fluid"
                src="https://i.ibb.co/L8L5rfJ/Vector.png"
                alt=""
                style={{ marginTop: "-3rem", width: "15rem" }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-12 my-5">
              <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    
                    <Area
                      type="monotone"
                      dataKey="result"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Statistics;