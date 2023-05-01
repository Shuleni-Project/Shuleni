import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Educator.css'
import { Pie, Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import './ChatRoom'


function Educator() {
  const [students, setStudents] = useState([]);

    const pieChartData = {
        labels: ["Present", "Absent"],
        datasets: [
            {
                data: [80,20],
                backgroundColor: ["#2D9CDB", "#D9D9D9"],
                borderWidth: 1
            },
        ],
    };

    const barChartData = {
      labels:['Phase1',"Phase2","Phase3","Phase4","Phase5"],
      datasets:[
        {
          label: "Progress",
          backgroundColor: "#2D9CDB",
          borderColor: "#1C1B1F",
          borderWidth: 1,
          hoverBackgroundColor: "#D9D9D9",
          hoverBorderColor: "#1C1B1F",
          data: [60,80,75]
        },
      ],
    };

      
    useEffect(() => {
      fetch("https://chat-app-back-end-qd27.onrender.com/users")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((err) => console.log(err))
    }, []);
    


  return (
    <div className="dashboard">
      <div className="container">
      <div className="sidebar">
        <h1>Educator Dashboard</h1>
        <ul>
          <li className="active">
            <Link to='/'>MY CLASS</Link>
          </li>
          <li>
            <Link to="/StudentList">MY STUDENTS</Link>
          </li>
          <li>
            <Link to='/ChatRoom.js'>MY CLASS CHAT</Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="main">
        
        <div className="class-overview">
          <h2>Class Overview</h2>
          <div className="pie-chart-progress-chart">
            <div>
              <h3>Overall Class Attendance</h3>
              <Pie data={pieChartData} />
            </div>
            <div>
              <h3>Class Mean Score</h3>
              <Bar data={barChartData} />
            </div>
            <div className="my-students">
              <h2>Student List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>                  
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.email.split('@')[0]}</td>
                      <td>{student.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educator;
