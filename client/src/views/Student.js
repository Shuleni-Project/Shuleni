import React from 'react';
import SideNavbar from '../components/SideNavbar';
import EnrolledCourses from '../components/EnrolledCourses';

function Student() {
  return (
    <div>
      <SideNavbar />
      <div id="content" className="min-h-fit w-screen min-w-fit">
        <div className="ml-24 pt-2">
          <h2 className="font-mono text-2xl antialiased font-bold text-sky-900">My Courses</h2>
          <EnrolledCourses />
        </div>
      </div>
    </div>
  )
}

export default Student