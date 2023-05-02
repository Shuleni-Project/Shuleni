import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getUserSuccess } from '../State/userSlice';

import Welcome from './ReusableComponents/WelcomeComponent';

import AnalyticsComponent from './ReusableComponents/AnalyticsComponent';

import ViewItems from './ReusableComponents/ViewItems/BoxedItems'

function AdminDashboard() {
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user.data);

  const[analysis, setAnalysis] = useState();

  console.log(user)

  const dispatch = useDispatch();

  useEffect(()=>{
    setAnalysis([
      {image:"/Web/grad.png", title:"Students", content:user?.school?.students_count, newData:user?.school?.new_students, config:{
      imageBg:"bg-gradient-to-br from-green-100 via-blue-300 to-red-300",
      newDataBg:"bg-blue-200",
      }},
      {image:"/Web/educator.png", title:"Educators", content:user?.school?.teachers_count, newData:user?.school?.new_teachers, config:{
        imageBg:"bg-gradient-to-br from-red-200 via-red-300 to-teal-200",
        newDataBg:"bg-red-300",
      }},
      {image:"/Web/class.png", title:"Units", content:user?.school?.units_count, newData:user?.school?.new_units, config:{
        imageBg:"bg-gradient-to-br from-lime-200 via-slate-300 to-red-200",
        newDataBg:"bg-lime-300",
      }},
      {image:"/Web/course.png", title:"Classes", content:user?.school?.courses_count, newData:user?.school?.new_courses, config:{
        imageBg:"bg-gradient-to-br from-red-200 via-slate-300 to-lime-200",
        newDataBg:"bg-slate-300",
      }},
    ]);

    
  },[user])


  function deleteFunction(id){
    console.log(id)
    fetch(`https://shuleni-api.onrender.com/users/${id}`, {
      method:"DELETE",
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
      },
    })
    .then(res=>{
      if(res.ok) res.json()
      .then(data=>{
        dispatch(getUserSuccess(data));
    })})
    .catch(e=>e)
  }
  
  
  return (
    <div className='py-4 pl-4'>
      
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
      
     <div>
       <ViewItems array={user?.school?.units?.map(
         st=>({ 
           name:st.name, 
           description: st.description,
           image:"/Web/class.png",
           viewFunction:()=>navigate(`/units/${st.id}`)
         })
         ) || []}
         title="Units"
         viewAllFunction={()=>navigate("/units")}
         addFunction={()=>navigate("/newUnit")}
       />

      <ViewItems array={user?.school?.courses?.map(
        st=>({ 
          name:st.name, 
          description: st.description,
          image:"/Web/course.png",
          viewFunction:()=>navigate(`/courses/${st.id}`)
        })
        )}
        title="Courses"
        viewAllFunction={()=>navigate("/units")}
        addFunction={()=>navigate("/newCourse")}
      />
      
      <ViewItems array={user?.school?.students?.map(
        st=>({ 
          name:st.username, 
          description: st.email,
          image:"/Web/grad.png",
          deleteFunction:()=>{deleteFunction(st.id)},
        })
        )}
        title="Students"
        viewAllFunction={()=>navigate("/students")}
        addFunction={()=>navigate("/newStudent")}
      />

      <ViewItems array={user?.school?.teachers?.map(
        st=>({ 
          name:st.username, 
          description: st.email,
          image:"/Web/educator.png",
          deleteFunction:()=>{deleteFunction(st.id)},
        })
        )}
        title="Educators"
        viewAllFunction={()=>navigate("/educators")}
        addFunction={()=>navigate("/newEducator")}
      />
      

     </div>
     
    </div>
  )
}

export default AdminDashboard
