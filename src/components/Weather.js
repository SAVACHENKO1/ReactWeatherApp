import React from "react";

const Weather = props =>(
            <div className="weather__info">
                {props.city && props.country && <p className="weather__key">Location: {props.city},{props.country}</p>}
                {props.temperture &&<p className="weather__key">Temperture:{props.temperture}</p>}
                {props.humidity &&<p className="weather__key">Humidity:{props.humidity}</p>}
                {props.description &&<p className="weather__key">Description:{props.description}</p>}
                {props.error&&<p className="weather__key">error:{props.error}</p>}
            </div>
        );
    

export default Weather;