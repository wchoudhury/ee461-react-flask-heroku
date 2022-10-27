import React from 'react';
import Project from './Project';
import "./Projects.css";

export class Projects extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count: 1
        }
    }

    render () {
        return (
          <div className="head">
            Projects
            <div className="outline">
              <div className="project">
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
              </div>
            </div>
          </div>
        )
    }
}

export default Projects