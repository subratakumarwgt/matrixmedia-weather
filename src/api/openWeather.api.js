import { Axios } from "axios";
import {openWeather} from "../config/openWeather.config"

export const getWeather = (lat,lon) => {
    let appid = openWeather.apiKey
    let url = openWeather.currentWeatherEndPoint
    let data = {
        lat,
        lon,
        appid
    }
    const axios = new Axios

   return new Promise((resolve,reject)=>{
    axios.get(url,data)
    .then(response => {
        resolve(response.data)
    })
    .catch(err=>{
        reject(err)
    })
   })
}
export const getLatLon = (city=null,country=null) => {
    let appid = openWeather.apiKey
    let url = openWeather.currentWeatherEndPoint
    let data = {
        lat,
        lon,
        appid
    }
    const axios = new Axios

   return new Promise((resolve,reject)=>{
    axios.get(url,data)
    .then(response => {
        resolve(response.data)
    })
    .catch(err=>{
        reject(err)
    })
   })
}