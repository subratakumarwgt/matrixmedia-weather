import { useState } from 'react';
import '../bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
function WeatherReport(props) {
   
    return (
   
           <div className='row justify-content-center'>
            <div className='col-md-10 mt-2'>
              <div className='card'>
                <h4 className='card-header'>
                  
                   Weather:                        <strong>{ props.weather.weather[0].main }</strong>
                </h4>
                <div className='card-body'>
                   
                    <div className='col-md-6'> 
                        <div> <p className='text-right'>Temp: {props.weather.main.temp} </p></div>
                        <div> <p className='text-right'>Feels like: {props.weather.main.feels_like} </p></div>
                        <div><p className='text-right'>Presure:  {props.weather.main.pressure} </p></div>
                        <div><p className='text-right'>Humidity:  {props.weather.main.humidity} </p></div>
                    </div> 
                    
                </div>
                <div className='card-header'>
                Weather report for <strong>{props.weather.name} </strong> 
                </div>
              </div>
                </div> 
           </div>
     
    );
  }
  
  export default WeatherReport;