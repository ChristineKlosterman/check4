
export class Weather {
    constructor(data) {
        this.kelvin = data.temp
        this.fa = Math.floor((this.kelvin - 273.15) * 9 / 5 + 32)
        this.celc = (this.fa - 32) * 5 / 9


    }

    get faTemplate() {
        return `  <div id="weather" onclick="app.weatherController.changeCelsius()" class="col-4 bg-light text-dark align-items-center">${this.fa} F</div>`
    }
    // <span class="bg-light text-dark">${this.icon}</span>`
    get celcTemplate() {
        return `  <div id="weather" onclick="app.weatherController.changeFa()" class="col-4 bg-light text-dark align-items-center">${this.celc} c</div>`
    }
} 