import { Pop } from "../Utils/Pop.js";
import { weatherService } from "../Services/WeatherService.js";
import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

function _drawWeather() {
    console.log('this is connected');

    // (291K − 273.15) × 9 / 5 + 32 = 64.13°F



    document.getElementById('weather').innerHTML = ProxyState.weather.faTemplate



}



export class WeatherController {
    constructor() {
        this.getWeather()
        ProxyState.on('weather', _drawWeather)
        console.log(this.getWeather);
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.log('[getWeather]', error);
            Pop.error(error)
        }
    }

    changeCelsius() {
        document.getElementById('weather').innerHTML = ProxyState.weather.celcTemplate
    }
    changeFa() {
        document.getElementById('weather').innerHTML = ProxyState.weather.faTemplate
    }
}