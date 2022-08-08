




// function _drawClock() 
//go to jeremy's slack and look how to pull date and time out of mdi instructions

// const date = new Date()
// console.log(date);






export class ClockController {

    constructor() {
        this._getTime
        setInterval(this._getTime, 1000)
        console.log(this._getTime);
    }
    _getTime() {
        const now = new Date()

        let hour = now.getHours();
        let minute = now.getMinutes();

        let amPm = 'am';

        if (hour > 12) {
            amPm = 'pm';
            hour = hour - 12
        }

        let time = hour + ':' + minute + amPm;

        document.getElementById('clock').innerHTML = time
        document.getElementById('clock').style.fontSize = '50px';
        document.getElementById('clock').style.textAlign = 'center';


    }
}



