const user_input1 =document.getElementById("user_input")
const srch_bt = document.getElementById("src_but")
const api_key = "1051ac9b1cd65290911641a014d16434"

srch_bt.addEventListener("click",async ()=>{
 user_input =user_input1.value
 const georesponse = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${user_input}&limit=5&appid=1051ac9b1cd65290911641a014d16434`)
        const geodata = await georesponse.json();
        if(geodata.length===0){
            alert("city not found! please enter correct city_name");
            return;
        }
       
        // console.log(geodata)
         const latitude = geodata[0].lat
         const longitude = geodata[0].lon
        //  console.log(latitude)
        //  console.log(longitude)
    ////////////////////////
        const georespons = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
        const geoweather_data = await georespons.json();
        //console.log(geoweather_data)
// console.log(user_input)
 document.querySelector(".city").innerHTML = geoweather_data.name;
        document.querySelector(".humity").innerHTML = geoweather_data.main.humidity+`%`;
       const temprature_k = geoweather_data.main.temp 
 document.querySelector(".temprature").innerHTML = Math.round(temprature_k-273.15)+`°c`
document.querySelector(".wind").innerHTML = geoweather_data.wind.speed +`km/h`;
 document.querySelector(".weather_status").innerHTML = geoweather_data.weather[0].description;
const weather_icon = geoweather_data.weather[0].main;
 //console.log(weather_icon)
if(weather_icon==="Clouds"){
    document.querySelector(".weather_icon").src ="cloud.svg"
// console.log("cloud_icon_icon updated")
 }


else if(weather_icon==="Rain"){
    document.querySelector(".weather_icon").src ="rain.svg"
 //console.log("rainig_icon")
 }

 else if(weather_icon==="Clear"){
 

    document.querySelector(".weather_icon").src ="sunny.png"
 //   console.log("sunny_icon")
    }

    else if(weather_icon==="Smoke"){
 
        document.querySelector(".weather_icon").src ="smoke.svg"
     //   console.log("smoke_icon")
        }
        else if(weather_icon==="Snow"){
 
            document.querySelector(".weather_icon").src ="snow.svg"
         //   console.log("snow_icon")
            }

            else if(weather_icon==="Haze"){

                document.querySelector(".weather_icon").src ="haze.png"
               // console.log("haze_icon")
                }
        else{
            document.querySelector(".weather_icon").src ="weather.png"
           // console.log("weather-png")
        }
      
     }
)












