
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Educator from './components/Educator';
import Portfolio from './components/Portfolio';
import Student from './components/Student';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SidebarData } from './components/SidebarData';

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
      <Route exact path='/landing' element= {<LandingPage />} />
      <Route exact path='/student' element= {<Student />} />
      <Route exact path='/Sidebar' element= {<Sidebar />} />
      <Route exact path='/SidebarData' element= {<SidebarData />} />

      

    </Routes> 
    </div>
  );
}

export default App;