const calculateTip = (total ,tipPercent = 0.25) =>(total*tipPercent)+total;

const farenhitToCelsius = (temp) =>{
    return (temp-32)/1.8;
}

const celsiusToFarenhit = (temp) =>{
    return (temp*1.8)+32
}

module.exports = {
    calculateTip,
    farenhitToCelsius,
    celsiusToFarenhit
}