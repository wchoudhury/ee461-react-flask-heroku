import React from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import "./Set.css";

export class Set extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: props.name,
            set: props.set,
            amount: 0,
            diffOne: props.one,
            diffTwo: props.two,
            diffThree: props.three,
            diffFour: props.four
        };
    }

    render () {
        return (
            <div class='Sets'>
              <div class ='space'><h3 id={this.state.diffOne}>Set {this.state.set} - {this.state.amount}/100</h3></div>
                <div class = 'box'><TextField id={this.state.diffTwo} placeholder='Enter amt'></TextField></div>
                <div class='space'>
                    <Button id={this.state.diffThree} onClick={this.updateCheckIn.bind(this)}>Check In</Button>
                    <Button id={this.state.diffFour} onClick={this.updateCheckOut.bind(this)}>Check Out</Button>
                </div>
                <br></br>
            </div>
        )
    }

    updateCheckIn() {
        var added = parseInt(document.getElementById(this.state.diffTwo).value);
        if(isNaN(added))
        {
            return;
        }
        this.state.amount += added;
        if(this.state.amount > 100)
        {
            this.state.amount = 100;
        }
        document.getElementById(this.state.diffOne).innerHTML = "Set " + this.state.set + ": " + this.state.amount + "/100";

        fetch(`/checkin/${this.state.name}/${added}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
    }
    
    updateCheckOut() {
        var removed = parseInt(document.getElementById(this.state.diffTwo).value);
        if(isNaN(removed) || removed > this.state.amount)
        {
            return;
        }
        this.state.amount -= removed;
        if(this.state.amount < 0)
        {
            this.state.amount = 0;
        }
        document.getElementById(this.state.diffOne).innerHTML = "Set " + this.state.set + ": " + this.state.amount + "/100";

        fetch(`/checkout/${this.state.name}/${removed}`)
                .then(response => response.text())
                .then((response) => {
                    alert(response)
                })
                .catch(err => console.log(err))
    }
}

export default Set