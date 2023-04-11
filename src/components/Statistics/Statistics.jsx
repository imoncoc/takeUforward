import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {
// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//   },
// ];

const data = [
  {
    name: "Assignment 1",
    uv: 60,
    result: 60,
    amt: 2400,
  },
  {
    name: "Assignment 2",
    uv: 60,
    result: 60,
    amt: 2210,
  },
  {
    name: "Assignment 3",
    uv: 60,
    result: 60,
    amt: 2290,
  },
  {
    name: "Assignment 4",
    uv: 60,
    result: 58,
    amt: 2000,
  },
  {
    name: "Assignment 5",
    uv: 60,
    result: 58,
    amt: 2181,
  },
  {
    name: "Assignment 6",
    uv: 60,
    result: 60,
    amt: 2500,
  },
  {
    name: "Assignment 7",
    uv: 60,
    result: 60,
    amt: 2100,
  },
  {
    name: "Assignment 8",
    uv: 60,
    result: 60,
    amt: 2100,
  },
];




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