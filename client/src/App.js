
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Educator from './components/Educator';
import Portfolio from './views/Portfolio';
import Student from './views/Student';
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

      

    </Routes> 

      <Route exact path='/login' element= {<Login />} />
      <Route exact path='/videoconference' element= {<VideoConference />} />
   </Routes> 

    </div>
  );
}

export default App;