import React from 'react';

const spanStyle ={
    color: "blue", 
    fontSize: 20
}


const Weather = props => (

        <div className="container">
            {<p><span style={spanStyle}>Location:</span> {props.city}, {props.country}</p>}  
            {<p><span style={spanStyle}>Temperature:</span> {props.temp} F</p>}
            {<p><span style={spanStyle}>Humidity:</span> {props.humidity}%</p>}
            {<p><span style={spanStyle}>Conditions:</span> {props.description}</p>}
            {<p>{props.error}</p>}
        </div>
    );

export default Weather;