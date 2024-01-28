import "./skills.css"

export default function Skills(){
    return( 
<section class="skills" id="skills">
        <h1>Skills</h1>
        <div class="skills-container">
            <div class="card" onclick="toggleSkills(this)">
                <h3>Front-end Development</h3>
                <div class="card-details">
                    <p>HTML<br/>
                    CSS<br/>
                    JavaScript<br/>
                    Bootstrap </p>
                </div>
            </div>

            <div class="card" onclick="toggleSkills(this)">
                <h3>Back-end Development</h3>
                <div class="card-details">
                    <p>PHP<br/>
                        Python<br/>
                        Java<br/>
                        C++ </p>
                </div>
            </div>

            <div class="card" onclick="toggleSkills(this)">
                <h3>Mobile Application Development</h3>
                <div class="card-details">
                    <p>Flutter<br/>
                        Android Studio<br/>
                        Kotlin<br/>
                        Java </p>               
                </div>
            </div>

            <div class="card" onclick="toggleSkills(this)">
                <h3>Database</h3>
                <div class="card-details">
                    <p>SQL</p>
                </div>
            </div>

            <div class="card" onclick="toggleSkills(this)">
                <h3>Wireframing and Mockup Design</h3>
                <div class="card-details">
                    <p>Figma<br/>
                        Mockflow</p>              
                </div>
            </div>

            <div class="card" onclick="toggleSkills(this)">
                <h3>Version Control</h3>
                <div class="card-details">
                    <p>Github</p>              
                </div>
            </div>
    
        </div>
    </section>
    );
}