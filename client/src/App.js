import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Educator from './components/Educator';
import Portfolio from './views/Portfolio';
import Student from './views/Student';
import ChatRoom from './components/ChatRoom';
import Chats from './components/Chats';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SidebarData } from './components/SidebarData';

import VideoConference from './components/VideoConference';


import Login from './components/Login';

function App() {

  return (
    <div>
      <Navbar />
    <Routes>
      <Route exact path='/' element= {<Home />} />
      <Route exact path='/about' element= {<About />} />
      <Route exact path='/admin' element= {<Admin />} />
      <Route exact path='/contact' element= {<Contact />} />
      <Route exact path='/educator' element= {<Educator />} />
      <Route exact path='/portfolio' element= {<Portfolio />} />
      <Route exact path='/student' element= {<Student />} />

      <Route exact path='/Sidebar' element= {<Sidebar />} />
      <Route exact path='/SidebarData' element= {<SidebarData />} />
      <Route exact path='/login' element= {<Login />} />
      <Route exact path='/videoconference' element= {<VideoConference />} />

      <Route exact path='/chats' element= {<Chats />} />
      <Route exact path='/chats/:unitId' element= {<ChatRoom />} /> 
      {/* TODO: When the student-user is viewing their units, have a button to join chat for each unit. 
      The button navigates student-user to /chats/:unitId */}

      {/* <button click={()=>{nav(`/chats/${unit.id}`)}}> ...  */}
  

      <Route exact path='/login' element= {<Login/>} />
      <Route exact path='/videoconference' element= {<VideoConference />} />
   </Routes> 

    </div>
  );
}

export default App;
