import React from 'react'

import ViewAndEdit from '../../../ReusableComponents/ViewEditor/ViewAndEdit'
import Input from '../../../ReusableComponents/Input'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
function AnswerExam({item, buttonLabel, buttonClickFunction, setInfo, editorConfig}) {
    
    function changeFunction(e){
      setInfo(prev=>({...prev, [e.target.name]: e.target.value}))
      console.log("Info changed")
    }    

    const user = useSelector((state) => state.user.data);
    const {id} = useParams();

    const navigate = useNavigate();
    
    if(item==="exams" && user.user_exams.map(obj=>obj.exam_id).includes(parseInt(id))){
      navigate("/dashboard")
    }
    
  return (
    <div>
      <Input changeFunction={changeFunction} placeholder={"IoT 101"} label="Name" name="name"/>
      <Input changeFunction={changeFunction} placeholder={"Introduction The Internet"} label="Description" name="description"/>
      <h1 className='text-gray-700 text-lg font-bold px-4'>Answer The Following Questions</h1>
      <ViewAndEdit item={item} buttonLabel={buttonLabel}  editorConfig={editorConfig} buttonClickFunction={buttonClickFunction}/>

    </div>
  )
}

export default AnswerExam