import React from 'react'
import Project from './Project'
import "./Projects.css";

const Projects = () => {
  return (
    <div className="title">Projects
          <div className="projects">
            <Project name="Project 1"/>
            <Project name="Project 2"/>
            <Project name="Project 3"/>
        </div>
    </div>
  )
}

export default Projects