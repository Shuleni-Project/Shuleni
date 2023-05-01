import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Web/Home';
import About from './Web/About';
import Terms from './Web/Terms';

import Portfolio from './views/Portfolio';
import Student from './views/Student';
import ChatRoom from './components/ChatRoom';
import Chats from './components/Chats';
import Navbar from './components/Navbar';
import NewUser from './components/ReusableComponents/NewUser'
import SideNavbar from './components/SideNavbar';
import NewItem from './components/ReusableComponents/NewItem';

import ViewOnly from './components/ReusableComponents/ViewEditor/ViewOnly';
import VideoConference from './components/VideoConference';


import Login from './components/Login';
import StudentDashbord from './components/StudentDashboard2';
import AdminDashboard from './components/AdminDashboard';
import EducatorDashboard from './components/EducatorDashboard';
import Course from './components/Course';
import CourseDetails from './components/CourseDetails';


import { useSelector, useDispatch } from 'react-redux';
import { getUserStart, getUserSuccess, getUserFailure } from './State/userSlice';
import { useEffect, useState } from 'react';

import Signup from './components/Signup';
import Footer from './Web/Footer';
import CreateExam from './components/EducatorDashboard/Features/Create';
import StudentAnswer from './components/StudentDashboard2/Features/StudentAnswer';
import ExamMarking from './components/EducatorDashboard/Features/Marking';
import Attendance from './components/EducatorDashboard/Features/Attendance';
import NewResource from './components/EducatorDashboard/Features/NewResource';

function App() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  console.log(user)

  useEffect(()=>{
    dispatch(getUserStart());

    const fetchUser = async () => {
      const token = localStorage.getItem("jwtToken")
      if(token){
        try {
          const response = await fetch('http://localhost:3000/me',{
            headers: {
                "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
            }
        })
        if(response.ok){
          const data = await response.json();
          dispatch(getUserSuccess(data));
        }
        else{
          localStorage.clear();
          navigate("/")
        }
        } catch (error) {
          dispatch(getUserFailure(error.message));
        }
      }
      else{
        navigate("/")
      }
    };
  
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  useEffect(()=>{},[user])

  const [editorInput, setEditorInput] = useState();

  const [info, setInfo] =useState();

  function examUpdateAndSubmit(item="exams", exam_id){
    if(!info) return;
    console.log({...info, body: editorInput, exam_id: exam_id, creator: user.email})
    if(user.role==="teacher"){
      fetch(`http://localhost:3000/${item}&creator=${user.email}`,{
        method:"PUT",
        headers:{
              "Content-Type":"application/json",
              "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
      }
      })
      .then(res=>{
        if(res.ok) res.json()
        .then(data=>{
            dispatch(getUserSuccess(data));
            navigate("/dashboard")
        })})
        .catch(e=>e)
    }else if(user.role ==="student"){
      fetch(`http://localhost:3000/${item==="exams"?"user_exams":"student_assignments"}`,{
        method:"POST",
        headers:{
              "Content-Type":"application/json",
              "Authorization" : "Bearer "+localStorage.getItem("jwtToken")
        },
        body:JSON.stringify(item==="exams"?{...info, body: editorInput, exam_id: exam_id, user_id: user.id}:
        {...info, body: editorInput,  user_id: user.id, assignment_id: exam_id })
      })
      .then(res=>{
        if(res.ok) res.json()
        .then(data=>{
            dispatch(getUserSuccess(data));
            navigate("/dashboard")
        })})
        .catch(e=>e)
    }

  }
  
  
  return (
      <div className='z-0 bg-gradient-to-t from-blue-100 via-red-200 to-gray-300'>
        <Navbar />
        {user && <SideNavbar/>}
        <div className={'h-[calc(100vh - 88px)] lg:pt-[calc(5rem+5px)] md:pt-0 z-10 '+(user ? "ml-[calc(6rem-6px)]":"")}>

          <Routes>
            <Route exact path='/' element= {<Home />} />
            <Route exact path='/about' element= {<About />} />
            <Route exact path='/terms' element= {<Terms />} />
            <Route exact path='/portfolio' element= {<Portfolio />} />

            
            <Route exact path='/student' element= {<Student />} />

            <Route exact path='/chats' element= {<Chats />} />
            <Route exact path='/chats/:unitId' element= {<ChatRoom />} /> 
            {/* TODO: When the student-user is viewing their units, have a button to join chat for each unit. 
            The button navigates student-user to /chats/:unitId */}

            {/* <button click={()=>{nav(`/chats/${unit.id}`)}}> ...  */}
        
            <Route exact path='/dashboard' element= {user?.role==="student"? 
            <StudentDashbord/> :(user?.role==="admin"? <AdminDashboard/> : 
            (user?.role==="teacher"?<EducatorDashboard /> : <></>))} />

            <Route exact path='/courses' element= {<Course item="courses" />} />
            <Route exact path='/courses/:id' element= {<ViewOnly item="courses" />} />
            
            <Route exact path='/units' element= {<Course item="units"/>} />

            <Route exact path='/educators' element= {<Course item="users" role="teacher"/>} />
            <Route exact path='/createExam' element={<CreateExam/>}/>
            <Route exact path='/createContent' element={<CreateExam item="content"/>}/>
            <Route exact path='/createAssignment' element={<CreateExam item="assignment"/>}/>
            <Route exact path='/attendance' element={<Attendance/>}/>

            {user?.role!=="admin" && <Route exact path='/courses/:id' element={<ViewOnly item="courses"/>}/>}
            {user?.role === "teacher" && <Route exact path='/exams/:id' element={
            <ExamMarking setInfo={setInfo} item="exams" buttonLabel="Submit" buttonClickFunction={examUpdateAndSubmit}
            editorConfig={{setEditorInput: setEditorInput, title:"Edit Exam"}}/>
            }/>}
            {user?.role === "teacher" && <Route exact path='/assignments/:id' element={
            <ExamMarking setInfo={setInfo} item="exams" buttonLabel="Submit" buttonClickFunction={examUpdateAndSubmit}
            editorConfig={{setEditorInput: setEditorInput, title:"Edit Exam"}}/>
            }/>}

            {user?.role === "student" && <Route exact path='/exams/:id' element={
            <StudentAnswer setInfo={setInfo} item="exams" buttonLabel="Submit" buttonClickFunction={examUpdateAndSubmit} 
            editorConfig={{setEditorInput: setEditorInput, title:"Answer"}}/>
            }/>}
            {user?.role === "student" && <Route exact path='/assignments/:id' element={
            <StudentAnswer setInfo={setInfo} item="assignments" buttonLabel="Submit" buttonClickFunction={examUpdateAndSubmit} 
            editorConfig={{setEditorInput: setEditorInput, title:"Answer"}}/>
            }/>}



            <Route exact path='/students' element= {<Course item="users" role="student"/>} />

            <Route exact path='/newCourse' element= {<NewItem item="course"/>} />
            <Route exact path='/newUnit' element= {<NewItem item="unit"/>} />
            <Route exact path='/createResource' element= {<NewResource item="unit"/>} />
            
            <Route exact path='/newStudent' element= {<NewUser role={0}/>} />
            <Route exact path='/newEducator' element= {<NewUser role={1}/>} />

            <Route exact path='/login' element= {<Login/>} />
            <Route exact path='/course_details/:id' element= {<CourseDetails/>} />
            {/* <Route exact path='/course/:id' element= {<Course/>} /> */}
            <Route exact path='/videoconference' element= {<VideoConference />} />
            <Route exact path='/signup' element= {<Signup />} />

          </Routes> 
        </div>
        <div className={'bottom-0 md:pt-0 z-10 '+(user ? "ml-[calc(6rem-6px)]":"")}>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
