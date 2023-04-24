import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Educator from './components/Educator';
import Portfolio from './views/Portfolio';
import Student from './views/Student';
import Navbar from './components/Navbar';

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
<<<<<<< HEAD
      <Route exact path='/chats' element= {<Chats />} />
      <Route exact path='/chats/:unitId' element= {<ChatRoom />} /> 
      {/* TODO: When the student-user is viewing their units, have a button to join chat for each unit. 
      The button navigates student-user to /chats/:unitId */}

      {/* <button click={()=>{nav(`/chats/${unit.id}`)}}> ...  */}
    </Routes> 
=======
      <Route exact path='/login' element= {<Login />} />
      <Route exact path='/videoconference' element= {<VideoConference />} />
   </Routes> 
>>>>>>> 688d889ed25e402e9753ede5404938609bf4308b
    </div>
  );
}

export default App;