import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CourseDetails() {
    const {id} = useParams()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:3000/courses/${id}`,{
          headers: {
              "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
          }
        })
        .then(response => response.json())
        .then(courses => {
            console.log(courses)
            setCourses(courses)
        })
    }, [])
  return (
    <div>
                <div  class="block rounded-lg bg-slate-300 mb-8 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h2 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{courses?.name}</h2>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{courses?.lesson}</p>
                </div>
    </div>
  )
}

export default CourseDetails;