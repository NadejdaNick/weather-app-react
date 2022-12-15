import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <h1>New York</h1>
            <ul>
                <li>Friday 07:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Mostly cloudy" />
                    6°С                    
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 7 km/h
                        </li>
                    </ul>
                </div>
            </div>
            
            </div>
    )
}