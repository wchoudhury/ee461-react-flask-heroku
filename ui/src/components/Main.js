import React, { Component } from 'react';
import Project from './Project';
import "./Main.css";

export class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count: 1
        }
    }

    render () {
        return (
            <div class='Projects'>
                <h2> Projects </h2>
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
                <Project name = {String("Project" + this.state.count)} count={this.state.count++}/>
            </div>
        )
    }
}

export default Main


