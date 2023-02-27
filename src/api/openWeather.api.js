import axios from "axios";
import {openWeather} from "../config/openWeather.config"
 const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

export const getWeather = (lat,lon) => {
    let appid = openWeather.apiKey
    let url = openWeather.currentWeatherEndPoint
    let data = {
        lat,
        lon,
        appid
    }   
    data = serialize(data)
   return new Promise((resolve,reject)=>{
    axios.get(url+"?"+data)
    .then(response => {
        resolve(response.data)
    })
    .catch(err=>{
        reject(err)
    })
   })
}
export const getLatLon = (city,countryCode) => {
    let appid = openWeather.apiKey
    let url = openWeather.geoLocationEndPoint

    let q = []

    if(city)
    q.push(city)
    if(countryCode)
    q.push(countryCode)

    q = q.join(",")

    let data = {
        q,
        limit:5,
        appid
    }
 
   return new Promise(async(resolve,reject)=>{
    await axios.get(url+"?"+serialize(data))
    .then(response => {
        resolve(response.data[0])
    })
    .catch(err=>{
        reject(err)
    })
   })
}