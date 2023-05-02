import React, { useState } from 'react'
import Input from '../../../../ReusableComponents/Input'
import Button from '../../../../ReusableComponents/Button';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getUserSuccess } from '../../../../../State/userSlice';

import Editor from '../../../../ReusableComponents/Editor'

function NewItem({item="exam"}) {

    const[info, setInfo] = useState({});

    const navigate = useNavigate();

    const loggedUser = useSelector((state) => state.user.data);

    const [unitSelected, setUnitSelected] = useState(true);

    const [editor, setEditorInput] = useState("")

    const dispatch = useDispatch();

    const options = item === "exam" ? loggedUser?.units : loggedUser?.courses;

    function submitFunction(e){
        e.preventDefault();
        console.log({...info, body: editor, creator: loggedUser.email})
        if(item==="course"){
        if(!parseInt(info[item==="exam" ? "unit_id" : "course_id"])){
            setUnitSelected(false)
           return
          }
        }
        fetch(`https://shuleni-api.onrender.com/${item}s`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
            },
            body:JSON.stringify({...info, body: editor, creator: loggedUser.email})
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
    <div className='relative bg-opacity-20 bg-gradient-to-tr from-lime-100 via-red-200 to-teal-100' >

    <div className='text-center relative top-8 left-6 pb-8  bg-opacity-25 w-[90%] font-bold text-xl'>
        <h3 className='text-[#2c066e] font-proxima text-xl'>Adding {(item==="exam"||item==="assignment")&&"An"} {item.toLocaleUpperCase()}</h3>
        <small>{!unitSelected && "Kindly Select a Unit/ Create one"}</small>
    </div>

        <form onSubmit={submitFunction}
            className='flex-wrap py-16 px-5 w-full '>
            
            <Input changeFunction={changeFunction} placeholder="Title/Name" label="Title" name="name"/>
            <Input changeFunction={changeFunction} placeholder={"Brief Description Of " + item} label="Description" name="description"/>
            {item==="exam" && <Input changeFunction={changeFunction} placeholder="Time in minutes" label="Duration" name="duration" type='number'/>}            
            {item==="assignment" && <Input changeFunction={changeFunction} placeholder="Time in minutes" label="Duration" name="due_date" type='date'/>}            

            <select required onChange={changeFunction} 
                name={item==="exam" ? "unit_id" : "course_id"} placeholder='Select Unit' 
                className='px-5 py-2 text-md m-3 rounded-lg'>
    
                <option className='p-2 w-full'
                value={0}>Select {item === "exam" ? "Unit" : "Course"}</option>
                
                {options?.map(unit=><option className='p-2 w-full'
                value={unit.id}>{unit.name}</option>)}
                
            </select>

            {/* <Input changeFunction={changeFunction} placeholder={item==="description"? "OOP ":"IoT 101"} label="Description" name="description"/> */}
            <Editor title="Details" setEditorInput={setEditorInput}/>
            <div className='p-7'>
            </div>
            <Button label={item === "exam" ? "Add Exam" : "Add Content"}/>
        </form>
    </div>
  )
}

export default NewItem