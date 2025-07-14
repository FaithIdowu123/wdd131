var year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = `@ ${year}`;
document.querySelector("#lastModified").textContent = "Last modified: "+ document.lastModified;

var Temp_C = 10;
var windspeed = 5;

var windChill = "N/A";
if (Temp_C <= 10){  
    if (windspeed > 4.8){
        const vPower = Math.pow(windspeed, 0.16);
        var WC = Calculate_windchill(Temp_C, vPower);
        WC = parseFloat(WC.toFixed(1));
        
        windChill = `${WC}°C`;
        console.log(windChill);
    }
}

document.querySelector("#Windchill").textContent = `${windChill}`;

function Calculate_windchill(Temp, power){
    return 13.12 + 0.6215 * Temp - 11.37 * power + 0.3965 * Temp * power;
};