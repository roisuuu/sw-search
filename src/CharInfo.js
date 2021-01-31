import './App.css';
import React from "react";
// import { useState } from 'react';

function CharInfo(props) {
    //console.log(props.data);
    return (
        <div className="InfoBox">
            <p>
                Name: {props.data.name}
            </p>
            
        </div>
    )
}

export default CharInfo;