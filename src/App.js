import './App.css';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';

function App() {
  return (
   <>
  <Header/>
  <Home/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;
