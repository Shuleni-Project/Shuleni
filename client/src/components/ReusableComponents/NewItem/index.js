import React, { useEffect, useState } from 'react'
import Input from '../Input'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { getUserSuccess } from '../../../State/userSlice';

import Editor from '../Editor'

function NewItem({item="course"}) {

    const[info, setInfo] = useState({});

    const navigate = useNavigate();

    const loggedUser = useSelector((state) => state.user.data);

    const [unitSelected, setUnitSelected] = useState(true);

    const [editor, setEditorInput] = useState("")

    const dispatch = useDispatch();

    const school = loggedUser?.school

    function submitFunction(e){
        e.preventDefault();
        console.log({...info, body: editor,school_id:school.id, creator: loggedUser.email})
        if(item==="course"){
            if(!parseInt(info.unit_id)){
                setUnitSelected(false)
                return
            }
        }
        fetch(`http://localhost:3000/${item}s`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
            },
            body:JSON.stringify({...info, body: editor,school_id:school.id, creator: loggedUser.email})
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
    
    if(item === "course" && school?.units.length === 0) return(
        <div>
            Kindly create a Unit first
            <Button label="Create a Unit" onclick={()=>navigate("/newUnit")}/>
        </div>
    )
    
  return (
    <div className='relative bg-opacity-20 bg-gradient-to-tr from-lime-100 via-red-200 to-teal-100' >

    <div className='text-center relative top-8 left-6 pb-8  bg-opacity-25 w-[90%] font-bold text-xl'>
        <h3 className='text-[#2c066e] font-proxima text-xl'>Adding A {item.toLocaleUpperCase()}</h3>
        <small>{!unitSelected && "Kindly Select a Unit/ Create one"}</small>
    </div>

        <form onSubmit={submitFunction}
            className='flex-wrap py-16 px-5 w-full '>
            
            <Input changeFunction={changeFunction} placeholder={item==="course"? "Software Engineering":"IoT 101"} label="Name" name="name"/>
            <Input changeFunction={changeFunction} placeholder={item==="course"? "Fullstack Development":"Introduction The Internet"} label="Description" name="description"/>
            
            {item === "course" && 
                <>
                    <Input changeFunction={changeFunction} 
                    placeholder={item==="course"? "Software Engineering":"IoT 101"} 
                    label="Lesson" 
                    name="lesson"/>
                    <span className="block text-gray-700 text-lg font-bold">Unit</span>
                    <select required onChange={changeFunction} 
                    name="unit_id" placeholder='Select Unit' 
                    className='px-5 py-2 text-md m-3 rounded-lg'>
            
                        <option className='p-2 w-full'
                        value={0}>Select Unit</option>
                        
                        {school?.units.map(unit=><option className='p-2 w-full'
                        value={unit.id}>{unit.name}</option>)}
                        
                    </select>
                </>
            }
            {/* <Input changeFunction={changeFunction} placeholder={item==="description"? "OOP ":"IoT 101"} label="Description" name="description"/> */}
            <Editor title="Details" setEditorInput={setEditorInput}/>
            <div className='p-7'></div>
            <Button label="Add course"/>
        </form>
    </div>
  )
}

export default NewItem