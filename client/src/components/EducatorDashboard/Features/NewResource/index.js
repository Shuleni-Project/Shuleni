import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Input from '../../../ReusableComponents/Input'
import Button from '../../../ReusableComponents/Button'

import FillLogin from '../../../../assests/FillLogin';
import { useSelector, useDispatch } from 'react-redux';

import { getUserSuccess } from '../../../../State/userSlice'

function NewResource() {
    const [info, setInfo]=useState();
    const user = useSelector((state) => state.user.data);

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    
    function submitFunction(e){
        e.preventDefault();
        console.log(info)
        fetch("https://shuleni-api.onrender.com/resources",{
            method:"POST",
            headers:{
                  "Content-Type":"application/json",
                  "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
            },
            body:JSON.stringify({...info, creator: user.email})
        })
        .then(res=>{
            if(res.ok) res.json()
            .then(data=>{
                dispatch(getUserSuccess(data));
                navigate("/dashboard")
            })})
            .catch(e=>e)
    }

    function changeFunction(e){
        setInfo({...info, [e.target.name]: e.target.value})
    }
    
  return (
    <div className='px-4 flex flex-wrap justify-center lg:justify-evenly items-center py-16 bg-gradient-to-br from-lime-100 via-red-200 to-teal-100'>
        <form 
            onSubmit={submitFunction}
            className='flex flex-wrap justify-center items-center w-full lg:w-1/2'>
                

            <Input changeFunction={changeFunction} placeholder="Name" label="Name" name="name"/>
            <Input changeFunction={changeFunction} placeholder="Name" label="Link eg https://link.com/location" name="file_url"/>
            <div className='block w-full'>
                <select required onChange={changeFunction} 
                    name="unit_id" placeholder='Select Unit' 
                    className='block px-5 py-2 text-md m-3 rounded-lg'>
            
                    <option className='p-2 w-full'
                    value={0}>Select Unit</option>
                    
                    {user?.school?.units.map(unit=><option className='p-2 w-full'
                    value={unit.id}>{unit.name}</option>)}
                    
                </select>
            </div>
            <Button label="Create Resource" style={{flexGrow:0}}/>
        </form>
        <div className="flex flex-grow lg:flex-grow p-2 md:w-1/2 h-max  w-full md:min-w-[500px] max-w-[500px] mt-20">
            <FillLogin />
        </div>
    </div>
  )
}

export default NewResource