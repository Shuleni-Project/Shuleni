import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Chart from '../../Chart';

function Courses({item, role}) {
  const [courses, setCourses] = useState([])

  const [units, setUnits] = useState([]);

  const navigate = useNavigate()

  const data={
    labels: units.map(unit=>unit.name),
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],}

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/${item}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    })
      .then((response) => response.json())
      .then((courses) => {
        setCourses(courses)
      })
  }, [item])
  
  useEffect(()=>{
    fetch(`http://127.0.0.1:3000/units`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUnits(data)
      })
  },[])

  function remove(id){
    console.log(id)
  }
  function addUnit(id, userId){
    console.log(id, userId)
    // fetch("")
  }
  
  return (
    <div>
      {courses.length ? (
        courses.map((course) => {
          // <Link to="/student">
          if(role==="student" || role==="teacher")
            return(
              <>{course.role===role && <div
              
              class="block rounded-lg bg-slate-300 mb-8 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <h2 onClick={() => navigate('/course_details')} class="flex flex-wrap mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {course.username}<br/>
                {course.email} 
              </h2>
              <div className='flex justify-between'>
                <div>{course.units.map((unit, ind)=><div key={ind} className='flex mx-4'>{unit.name}</div>)}</div>
                <select onChange={(e)=>addUnit(e.target.value, course.id)}>{units.map((unit, ind)=><option key={ind} value={unit.id}>{unit.name}</option>)}</select>
              </div>
                  <button onClick={()=>remove(course.id)} class="flex mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Remove User from School🗑️
                  </button>
            </div>}
          </>
            )
          
          return (
            <div
              onClick={() => navigate('/course_details')}
              class="block rounded-lg bg-slate-300 mb-8 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            >
              <h2 class="flex mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {course.name}
              </h2>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {item==="courses" && course.lesson}
              </p>
              <Chart chartData={data}/>

            </div>
          )
          
        })
      ) : (
        <>NO COURSES AT THE MOMENT{console.log("ghgsd")}</>
      )}
    </div>
  )
}

export default Courses
