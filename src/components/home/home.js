import "./home.css";

export default function Home() {
  return (
    <section class = "home section" id ="home">
                <img src="assets\Photo2.jpg" alt="My image" class="home_img"/>
                <h1 class="home_title">Maria<br/> Software Developer</h1>
                <a href="assets\Resume.pdf" download="Resume.pdf" class="download-button" target="_blank">Download Resume</a>

                <p class="home_intro">Knowledge of various programming languages and software development methodologies.<br/>
                    I enjoy problem-solving, testing my skills, and continually seeking ways to improve. <br/> 
                    I prioritize the quality of my work and am adaptable to collaborating in a team or working independently.</p>
    </section>
  );
}
