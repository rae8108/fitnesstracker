import React from 'react'
import './Homepage.css';
import DateAPI  from "./DateAPI"


export default function Homepage() {
    return (
        <div>
        <h1 className="bordered-heading">Fitness Tracker</h1>
     
        <DateAPI />
        </div>

    )
}