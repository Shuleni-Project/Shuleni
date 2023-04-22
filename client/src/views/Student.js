import React from 'react';
import { useState } from 'react';
import SideNavbar from '../components/SideNavbar';
import EnrolledCourses from '../components/EnrolledCourses';
import Chart from '../components/Chart';
import { studentScores } from '../Data';

function Student() {
  const [studentScore, setScore] = useState({
    labels: studentScores.map(data => data.course),
    datasets: [{
      label: `student's score`,
      data: studentScores.map(data => data.score)
    }]
  });
  return (
    <div>
      <SideNavbar />
      <div id="content" className="min-h-fit w-screen min-w-fit">
        <div className="ml-24">
          <h2 className="font-mono text-2xl antialiased font-bold text-sky-900">My Courses</h2>
          <EnrolledCourses />
          <div className='max-w-sm'>
            <Chart chartData={studentScore} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student