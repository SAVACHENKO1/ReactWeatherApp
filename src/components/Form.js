import React from "react";

const Form = props =>(
            <div>
                <form onSubmit={props.getWeather}>
                    <input type="test" name="city" placeholder="City"/>
                    <input type="test" name="country" placeholder="Country"/>
                    <button>Get weather </button>
                </form>
            </div>
        );
    

export default Form;