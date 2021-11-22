import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="admin" element = {<Admin/>}/>
      <Route path="projects" element = {<Projects/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path="contact" element = {<Contact/>}/>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
