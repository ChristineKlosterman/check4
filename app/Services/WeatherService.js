import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"


class WeatherService {
    async getWeather() {
        let res = await sandboxApi.get('/weather')

        // ProxyState.weather = res.data.main.temp 
        console.log('temp', res.data.main);
        ProxyState.weather = new Weather(res.data.main)
        let t = (res.data.main.temp - 273.15) * 9 / 5 + 32
        return t

    }


}

export const weatherService = new WeatherService()

