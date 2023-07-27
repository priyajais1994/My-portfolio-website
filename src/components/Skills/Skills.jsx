import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Skills.css";



const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div class="skills_section" id="Skills">
    <div class="skills_head">
        <h2>My <span>Skills</span></h2>
        <p>Here is my skills to represent my Expertise</p>
    </div>

    <div class="skills_main">
        <div class="skill_bar">
            <div class="info">
                <p>HTML</p>
                <h6>90%</h6>
            </div>
            <div class="bar">
                <span class="html"></span>
            </div>
        </div>
        <div class="skill_bar">
            <div class="info">
                <p>CSS</p>
                <h6>85%</h6>
            </div>
            <div class="bar">
                <span class="css"></span>
            </div>
        </div>
     
        <div class="skill_bar">
            <div class="info">
                <p>Java Script</p>
                <h6>80%</h6>
            </div>
            <div class="bar">
                <span class="js"></span>
            </div>
        </div>
        <div class="skill_bar">
            <div class="info">
                <p>React js</p>
                <h6>75%</h6>
            </div>
            <div class="bar">
                <span class="react"></span>
            </div>
        </div>
        
        
    </div>
</div>

  );
};

export default Skills;
