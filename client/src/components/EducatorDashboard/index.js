import React, { useState, useEffect,} from "react";

import { useNavigate } from 'react-router-dom';

import { useSelector, } from 'react-redux';

// import { getUserSuccess } from '../../State/userSlice';

import Welcome from "../ReusableComponents/WelcomeComponent";

import AnalyticsComponent from "../ReusableComponents/AnalyticsComponent";

import ViewItems from '../ReusableComponents/ViewItems/BoxedItems'

function EducatorDashboard() {
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user.data);

  const[analysis, setAnalysis] = useState();

  console.log(user)

  useEffect(()=>{
    setAnalysis([
      {image:"/Web/grad.png", title:"Units", content:user?.units?.length,  config:{
      imageBg:"bg-gradient-to-br from-green-100 via-blue-300 to-red-300",
      newDataBg:"bg-blue-200",
      }},
      {image:"/Web/grad.png", title:"Students", 
      content:user?.school?.students?.filter(st=>user?.units?.map(unit=>unit?.id).includes(parseInt(st?.course)))?.length, 
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
    <div className="pt-4 pl-4">
      
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

        <ViewItems array={user?.school?.students?.filter(st=>user?.units?.map(unit=>unit?.id).includes(parseInt(st?.course))).map(
         st=>({ 
           name:st.username, 
           description: st.email,
           image:"/Web/class.png",
           viewFunction:()=>navigate(`/students`)
         })
         ) || []}
         title="Students"
         viewAllFunction={()=>navigate("/students")}
       />

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

        <ViewItems array={user?.contents.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:()=>navigate(`/contents/${st.id}`)
         })
         ) || []}
         title="Contents"
         addFunction={()=>navigate("/createContent")}
        />

        <ViewItems array={user?.exams.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:()=>navigate(`/exams/${st.id}`)
         })
         ) || []}
         title="Exams"
         addFunction={()=>navigate("/createExam")}
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
         addFunction={()=>navigate("/createAssignment")}
        />
      
    </div>
  );
}
export default EducatorDashboard;