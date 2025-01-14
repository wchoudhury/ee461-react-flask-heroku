import React from 'react';
import "./Project.css";
import { Button } from '@mui/material';
import Set from './Set';

export class Project extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            name: props.name,
            count: props.count,
            set: 1,
            in: 1
        }
    }

    render () {
        return (
          <div className='main'>
            <div className='display'>
              <div className="heading">
                Project {this.state.count}
              </div>
              <div className="check">
                <Set one = {String(this.state.count + ":" + this.state.set)} 
                  two = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                  three = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                  four = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set+ ":" + this.state.count + ":" + this.state.set)}
                  set={this.state.set++}
                  name = {String("Project " + this.state.count)}/>
                <Set one = {String(this.state.count + ":" + this.state.set)} 
                  two = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                  three = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set)}
                  four = {String(this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set + ":" + this.state.count + ":" + this.state.set+ ":" + this.state.count + ":" + this.state.set)}
                  set={this.state.set++}
                  name = {String("Project " + this.state.count)}/>
              </div>
              <div class='join'>
                <Button id={this.state.name} onClick={this.changeLogin.bind(this)}>Join   </Button>
              </div>
          </div>
        </div> 
      )
    }

    changeLogin() {
        if(this.state.in == 1)
        {
            document.getElementById(this.state.name).innerHTML = "Leave";
            this.state.in = 0;

            fetch(`/join/${this.state.name}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
        }
        else
        {
            document.getElementById(this.state.name).innerHTML = "Join";
            this.state.in = 1;

            fetch(`/leave/${this.state.name}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
        }
    }
}

export default Project