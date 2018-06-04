import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_key = "7955a7d2b0ce8ee219b9b699ad46a3fd";

class App extends React.Component {
    state={
        temperture:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined        
    }

    myResetstates = async (errMsg)=>{
        this.setState({
            temperture: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: errMsg
        });
    }
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`);
        
        if(city == undefined|| country==undefined )
        {
            this.myResetstates("you must fill both values first");
            return;
        }
        const data = await api_call.json();
        //console.log(data);
        if(city && country){
        this.setState({
            temperture: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error:undefined
        })}
        else{
            this.myResetstates("Please enter values like: london uk");
        }
    }

    


    render() {
        return ( 
        <div>
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 title-container">
                                <Title />
                            </div>
                            <div className="col-sm-7 form-container">
                                <Form getWeather = {this.getWeather} />
                                <Weather 
                                temperture={this.state.temperture}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};


export default App;