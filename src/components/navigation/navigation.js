import "../navigation/navigation.css";
import React from "react";

export default function Navigation() {
    return(
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>   
        </nav>
    );
}
