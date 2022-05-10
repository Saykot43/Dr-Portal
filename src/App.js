import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Appointment from './Appointment/Appointment';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import Login from './Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/review' element={<Review />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
