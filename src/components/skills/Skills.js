import "./skills.css"
import React from "react";


export default function Skills(){
    return( 
<section className="skills" id="skills">
        <h1 className="skills_title">Skills</h1>
        <div className="skills-container">
            <div className="card">
                <h3>Front-end Development</h3>
                <div className="card-details">
                    <p>HTML<br/>
                    CSS<br/>
                    JavaScript<br/>
                    Bootstrap </p>
                </div>
            </div>

            <div className="card">
                <h3>Back-end Development</h3>
                <div className="card-details">
                    <p>PHP<br/>
                        Python<br/>
                        Java<br/>
                        C++ </p>
                </div>
            </div>

            <div className="card">
                <h3>Mobile Application Development</h3>
                <div className="card-details">
                    <p>Flutter<br/>
                        Android Studio<br/>
                        Kotlin<br/>
                        Java </p>               
                </div>
            </div>

            <div className="card">
                <h3>Database</h3>
                <div className="card-details">
                    <p>SQL</p>
                </div>
            </div>

            <div className="card">
                <h3>Wireframing and Mockup Design</h3>
                <div className="card-details">
                    <p>Figma<br/>
                        Mockflow</p>              
                </div>
            </div>

            <div className="card">
                <h3>Version Control</h3>
                <div className="card-details">
                    <p>Github</p>              
                </div>
            </div>
    
        </div>
    </section>
    );
}
