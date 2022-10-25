import React from 'react'
import Set from './Set';
import "./Project.css";
import Button from '@mui/material/Button';

const Project = (props) => {
    
  return (
    <div>{props.name}
        <div className="hw">
            <div>HWSet1: / 100</div>
            <div>HWSet2: / 100</div>
        </div>
        <div className="hw">
            <Set/>
            <Set/>
        </div>
        <div><Button className='project-join'>Join</Button></div>
    </div>
  )
}

export default Project
