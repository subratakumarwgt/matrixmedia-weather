import './bootstrap.css';
import Filter from './components/Filter';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from "./api/resources.api"
import { setCountries } from './action/filters.actions';
import { getLatLon, getWeather } from './api/openWeather.api';
import WeatherReport from './components/WeatherReport';


function App() {
  const [inputs,setInputs] = useState({
    country:"",
    city:""
  })

  const [weather,setWeather] = useState({})

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]:event.target.value
    })
   
  }
  const handleSearch =async () => {
    try {
      setWeather({})
      let city = inputs.city
     let country = inputs.country
     if(city && country){
      let latlon = await getLatLon(city,country).catch(err => {
        alert(err.message)
        return;
      })
    
        const {
          lat,
          lon
        } = latlon
        let weather = await getWeather(lat,lon)
    
        setWeather(weather)
      
     
      
    }
    else{
      alert("Please provide city/country")

    }
  } catch (error) {
    
    console.log(error)
  }
    
   
   
  }

  const countriesList = useSelector(state => state.countries)
  const dispatch = useDispatch()
  const allCountries = async () => {
    try {
        let listObject = await getCountries() 
        console.log(listObject,"list")
        let countries = Object.keys(listObject)

        countries = countries.map(elem=>{
            return {
                id:elem,
                text:listObject[elem].country
            }
        })
        return countries
    } catch (error) {
      console.log(error,"E")
        return [{
            id:0,
            text:"Please select a country"
        }]
    }
    
}

  useEffect(()=>{

    async function setCountryList(){
      let countries = await allCountries()
      console.log("countries",countries)
      dispatch(setCountries(countries))
    }
    setCountryList()
   
  },[])

  return (
    <div className='container mt-5'>
         <div className='row justify-content-center'>
          <div className='col-md-10'>
          <h4>Matrixmedia React Weather APP</h4>
          <div className='container'>
            <Filter 
            inputs = {inputs} 
            handleInputChange = {handleInputChange} 
            countries={countriesList} 
            handleSearch={handleSearch} />
            </div>
          <div className = "container">
            {
              inputs.city && inputs.country && weather.main &&
              <WeatherReport 
              city = {inputs.city} 
              country = {inputs.country} 
              weather = {weather} 
              />
            }
           
          </div>
         </div>
         </div>
    </div>
  );
}

export default App;
