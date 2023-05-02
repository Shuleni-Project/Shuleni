import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import {getUserSuccess} from '../../../../State/userSlice'

import ViewItems from '../../../ReusableComponents/ViewItems/RowedItems'


function Attendace() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  function markAttendance(e, id){
    e.target.disabled = true

    fetch(`https://shuleni-api.onrender.com/attendances`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
    },
      body:JSON.stringify({ user_id: id,date: new Date().toISOString(), creator: user.email, present: e.target.value})
    })
    .then(res=>{
      if(res.ok) res.json()
      .then(data=>{
          dispatch(getUserSuccess(data));
          console.log(data)
      })})
      .catch(e=>e)

    
  }
  
  console.log(user)
  
  return (

    <div className='px-4 lg:pt-4 py-8 bg-gray-400 bg-opacity-10'>
      
      <ViewItems array= {user?.school?.students.map(
        obj=>({
          name: obj.username,
          image: "/Web/grad.png",
          description: obj.email,
          optionsArray:[{name:"Select", value: null},{name:"Present", value:true}, {name: "Absent", value: false}],
          selectOnChange:(e)=>markAttendance(e,obj.id),
          optionsDisabled:user?.school?.attendances.find(at=>at.user_id ===obj.id && new Date(at.date).toDateString() === new Date().toDateString()),
          defaultValue:  user?.school?.attendances.find(at=>at.user_id ===obj.id && new Date(at.date).toDateString() === new Date().toDateString())?.present,
        }))}
        title="Mark Attendance"
      />
    </div>
  )
}

export default Attendace