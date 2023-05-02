// import React, { useEffect, useState } from 'react'
import Courses from './ReusableComponents/Courses'
import EnrolledCOurses from './EnrolledCourses'
// import Chart from './Chart'

function StudentDashbord() {
  
  
  return (
    <>
      <Courses item={"courses"}/>
      <EnrolledCOurses/>
    </>
  )
}

export default StudentDashbord