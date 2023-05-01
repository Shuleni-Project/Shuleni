import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { getUserSuccess } from '../../../State/userSlice';


import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';

function NewUser({role=2}) {
    const [user, setUser] = useState({role: role});

    const [unitSelected, setUnitSelected] = useState(true);

    const loggedUser = useSelector((state) => state.user.data);

    const school = loggedUser?.school
    
    const dispatch = useDispatch();

    console.log(school)
    
    function setInfo(e){
      setUser({...user, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();
    
    function submitFunction(e){
      e.preventDefault();
      if(!parseInt(user.course)){
          setUnitSelected(false)
         return
        }
        setUnitSelected(true)
        console.log(user)
        fetch("http://localhost:3000/users",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({...user,school_id:school.id, gender: "", creator: loggedUser.email})
              })
              .then(res=>{
                if(res.ok) res.json()
                .then(data=>{
                  dispatch(getUserSuccess(data));
                  navigate("/dashboard")
              })})
              .catch(e=>e)
    }

    
  return (
    
    <div className='relative bg-opacity-20 bg-gradient-to-tl from-lime-100 via-red-200 to-gray-300' >

{/* eslint-disable-next-line react/style-prop-object, react/style-prop-object*/}
      <Button style="absolute top-8 left-6"
      onclick={()=>navigate("/dashboard")} label="Go Back"/>

      {/* <div className='text-center font-bold text-xl'> */}
      <div className='text-center relative top-8 left-6 pb-8  bg-opacity-25 w-[90%] font-bold text-xl'>
        <h3 className='text-[#2c066e] font-proxima text-xl'>{role?"Adding A Teacher To "+school?.name:"Adding A Student To " + school?.name}</h3>
        <small>{!unitSelected && "Kindly Select a Unit/ Create one"}</small>
      </div>
      
      <form onSubmit={submitFunction}
      className='flex-wrap py-16 px-5 w-full '>

        
          <Input changeFunction={setInfo} placeholder="John Doe" label="UserName" name="username"/>
          <Input changeFunction={setInfo} placeholder="Email" label="Email" name="email" type='email'/>
          
          <span className="block text-gray-700 text-lg font-bold">Unit</span>
          <select required 
          onChange={setInfo} name='course' 
          placeholder='Select Unit' 
          className='px-5 py-2 text-md m-3 rounded-lg'>
            
            <option className='p-2 w-full'
            value={0}>Select Unit</option>
            
            {school?.units.map(unit=><option className='p-2 w-full'
            value={unit.id}>{unit.name}</option>)}
            
          </select>
          
          
          <button
            className="block flex-1 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >Signup</button>

          
      </form>
    </div>
  )
}

export default NewUser