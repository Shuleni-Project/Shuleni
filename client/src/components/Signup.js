import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { getUserSuccess } from '../State/userSlice';
import { useNavigate } from 'react-router-dom';

import Input from './ReusableComponents/Input';

import FillLogin from '../assests/FillLogin';

function Signup() {
    const [user, setUser] = useState({role: 2});
    const [school, setSchool]= useState({});

    const [schoolInfo, setSchoolInfo] = useState(false);

    const loggedUser = useSelector((state) => state.user.data);
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    

    function submitFunction(e){
      e.preventDefault();
      if(schoolInfo){
        fetch("http://localhost:3000/schools",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(school)
        })
        .then(res=>{

          if(res.ok){
            res.json()
            .then((data)=>{
              
              console.log(data)
              fetch("http://localhost:3000/users",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({...user,school_id:data.id, course:"", gender: ""})
              })
              .then(res=>res.json())
              .then(data=>{
                dispatch(getUserSuccess(data.user));
                localStorage.setItem("jwtToken",data.token)
                console.log(data)
                navigate("/dashboard")
              })
              .catch(e=>e)
              })
              
              
            }
          })
      }
      else{
        setSchoolInfo(true);
      }
    }

    function schoolChange(e){
      setSchool({...school, [e.target.name]: e.target.value})
    }

    function userChange(e){
      setUser({...user, [e.target.name]: e.target.value})
    }
    
  return (
    <div className='flex flex-wrap justify-center lg:justify-evenly items-center py-16 bg-gradient-to-br from-lime-100 via-red-200 to-teal-100'>
      {schoolInfo?
      <form onSubmit={submitFunction}
      className='flex flex-wrap justify-center items-center w-full lg:w-1/2'
      >
        <>
         <Input changeFunction={schoolChange} placeholder="Name" label="School Name" name="name"/>
         <Input changeFunction={schoolChange} placeholder="Description" label="Description" name="description"/>
         <Input changeFunction={schoolChange} placeholder="Address" label="Address" name="address"/>
        </>
          <button
                    className="block flex-grow-0 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"

          >Signup</button>
      </form>
      :

      <>

        <form onSubmit={submitFunction}
        className='flex flex-grow flex-col items-center min-w-max max-w-lg w-full lg:w-1/2'
        >
          <Input changeFunction={userChange} placeholder="John Doe" label="UserName" name="username"/>
          <Input changeFunction={userChange} placeholder="Email" label="Email" name="email" type='email'/>
          <Input changeFunction={userChange} placeholder="Password" label="Password" name="password" type='password'/>
          <button
                    className="block rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"

          >Signup</button>
        </form>
      </>}
      <div className="flex flex-grow lg:flex-grow p-2 md:w-1/2 h-max  w-full md:min-w-[500px] max-w-[500px] mt-20">
        <FillLogin />
    </div>
    </div>
  )
}

export default Signup;