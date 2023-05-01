import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Welcome from "../ReusableComponents/WelcomeComponent";

import AnalyticsComponent from "../ReusableComponents/AnalyticsComponent";

import ViewItems from '../ReusableComponents/ViewItems/BoxedItems'

function StudentDashboard2() {
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user.data);

  const[analysis, setAnalysis] = useState();

  useEffect(()=>{
    setAnalysis([
      {image:"/Web/grad.png", title:"Units", content:user?.units?.length,  config:{
      imageBg:"bg-gradient-to-br from-green-100 via-blue-300 to-red-300",
      newDataBg:"bg-blue-200",
      }},
      {image:"/Web/grad.png", title:"Exams Done", 
      content:user?.school?.students?.filter(st=>user?.units?.map(unit=>unit?.id).includes(parseInt(st?.course))).length, 
      config:{
        imageBg:"bg-gradient-to-br from-red-200 via-red-300 to-teal-200",
        newDataBg:"bg-red-300",
      }},
      {image:"/Web/class.png", title:"Exams", content:user?.exams?.length, config:{
        imageBg:"bg-gradient-to-br from-lime-200 via-slate-300 to-red-200",
        newDataBg:"bg-lime-300",
      }},
      {image:"/Web/course.png", title:"Courses", content:user?.courses?.length, config:{
        imageBg:"bg-gradient-to-br from-red-200 via-slate-300 to-lime-200",
        newDataBg:"bg-slate-300",
      }},
    ]);

  },[user])

  return (
    <div className='pl-4 py-4'>
      <Welcome/>
      
      <div className='flex flex-wrap'>
      {analysis?.map((obj,ind)=>
        <AnalyticsComponent key={ind} 
        image={obj.image} 
        title={obj.title}
        config={obj.config}
        content={obj.content}
        newData={obj.newData}
        />)}
        </div>


        <ViewItems array={user?.courses.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:()=>navigate(`/courses/${st.id}`)
         })
         ) || []}
         title="Courses"
        />

        <ViewItems array={user?.exams.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:(!user?.user_exams.map(obj=>obj.exam_id).includes(st.id)) && (()=>navigate(`/exams/${st.id}`))
         })
         ) || []}
         title="Exams"
        />

        <ViewItems array={user?.assignments?.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:(!user?.user_assignments?.map(obj=>obj.exam_id).includes(st.id)) && (()=>navigate(`/assignments/${st.id}`))
         })
         ) || []}
         title="Assignments"
        />
        <ViewItems array={user?.school?.resources?.filter(res=>user?.units?.map(unit=>unit.id).includes(res.id)).map(
         st=>({ 
           name:st.name, 
           description: st.file_url,
           image:"/Web/educator.png",
           viewFunction:()=>window.open(`${st.file_url}`)
         })
         ) || []}
         title="Resources "
        />
        
    </div>
  )
}

export default StudentDashboard2