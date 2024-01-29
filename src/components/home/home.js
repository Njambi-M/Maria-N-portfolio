import Social from "../socials/social";
import myImage from '../../assets/Photo2.jpg'
import "./home.css";

export default function Home() {
  return (
    <section className = "home section" id ="home">
                <img src={myImage} alt="Me" className="home_img"/>
                <h1 className="home_title">Maria<br/> Software Developer</h1>
                <a href="assets\Resume.pdf" download="Resume.pdf" className="download-button" target="_blank" rel='noreferrer'>Download Resume</a>

                <p className="home_intro">Knowledge of various programming languages and software development methodologies.<br/>
                    I enjoy problem-solving, testing my skills, and continually seeking ways to improve. <br/> 
                    I prioritize the quality of my work and am adaptable to collaborating in a team or working independently.</p>
                    <Social/>
    </section>
  );
}
