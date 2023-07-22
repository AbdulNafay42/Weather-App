fetch("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=4f600ec3b173500377967610056d2c6e&units=metric")
    .then(res => res.json())
    .then((res) => {
        document.getElementById("temp").innerHTML = `${Math.round(res.main.temp)}°c`;
        document.getElementById("city").innerHTML = res.name;
        document.getElementById("humid").innerHTML = `${Math.round(res.main.humidity)}%`;
        document.getElementById("wind").innerHTML = `${res.wind.speed}m/s`;
        console.log(res.weather[0].main);


        if( res.weather[0].main== "Clear"){
            document.getElementById("weather-icon").src = "animations/clear-night.svg"
        }
        else if(res.weather[0].main== "Rain"){
            document.getElementById("weather-icon").src =  "animations/rain.svg"
        }
        else if(res.weather[0].main== "Sunny"){
            document.getElementById("weather-icon").src = "animations/sunny.svg"
        }
        else if(res.weather[0].main== "Haze"){
            document.getElementById("weather-icon").src = "animations/haze.svg"
        } 
        else if(res.weather[0].main== "Snow"){
            document.getElementById("weather-icon").src ="animations/snow.svg"
        }
        else if(res.weather[0].main== "Wind"){
            document.getElementById("weather-icon").src = "animations/wind.svg"
        }
        else if(res.weather[0].main== "Drizzle"){
            document.getElementById("weather-icon").src = "animations/drizzle.svg"
        }   
        else if(res.weather[0].main== "Thunderstorm"){
            document.getElementById("weather-icon").src = "animations/thunderstorms.svg"
        }   
        else if(res.weather[0].main== "Clouds"){
            document.getElementById("weather-icon").src = "animations/cloudy.svg"
        }   
        else if(res.weather[0].main== "mist"){
            document.getElementById("weather-icon").src = "animations/mist.svg"
        }   
        else if(res.weather[0].main== "smoke"){
            document.getElementById("weather-icon").src = "animations/smoke.svg"
        }   
        else if(res.weather[0].main== "dust"){
            document.getElementById("weather-icon").src = "animations/dust.svg"
        }   
        else if(res.weather[0].main== "fog"){
            document.getElementById("weather-icon").src = "animations/fog.svg"
        }   
        else if(res.weather[0].main== "sand"){
            document.getElementById("weather-icon").src = "animations/sand.svg"
        }   
        else if(res.weather[0].main== "tornado"){
            document.getElementById("weather-icon").src = "animations/tornado.svg"
        }   
      
        console.log(res)
    })
    .catch((err) => {
        console.log(alert('shu likho'))
    })
function changeLocation() {
    var weather = document.getElementById("weather").value
    console.log(weather)
   
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=4f600ec3b173500377967610056d2c6e&units=metric`)
.then(res => res.json())
.then((res) => {
    document.getElementById("temp").innerHTML = `${Math.round(res.main.temp)}°c`;
    document.getElementById("city").innerHTML = res.name;
    document.getElementById("humid").innerHTML = `${Math.round(res.main.humidity)}%`;
    document.getElementById("wind").innerHTML = `${res.wind.speed}m/s`;
    console.log(res.weather[0].main);

    if( res.weather[0].main== "Clear"){
        document.getElementById("weather-icon").src = "animations/clear-night.svg"
    }
    else if(res.weather[0].main== "Rain"){
        document.getElementById("weather-icon").src =  "animations/rain.svg"
    }
    else if(res.weather[0].main== "Sunny"){
        document.getElementById("weather-icon").src = "animations/sunny.svg"
    }
    else if(res.weather[0].main== "Haze"){
        document.getElementById("weather-icon").src = "animations/haze.svg"
    } 
    else if(res.weather[0].main== "Snow"){
        document.getElementById("weather-icon").src ="animations/snow.svg"
    }
    else if(res.weather[0].main== "Wind"){
        document.getElementById("weather-icon").src = "animations/wind.svg"
    }
    else if(res.weather[0].main== "Drizzle"){
        document.getElementById("weather-icon").src = "animations/drizzle.svg"
    }   
    else if(res.weather[0].main== "Thunderstorm"){
        document.getElementById("weather-icon").src = "animations/thunderstorms.svg"
    }   
    else if(res.weather[0].main== "Clouds"){
        document.getElementById("weather-icon").src = "animations/cloudy.svg"
    }   
    else if(res.weather[0].main== "mist"){
        document.getElementById("weather-icon").src = "animations/mist.svg"
    }   
    else if(res.weather[0].main== "smoke"){
        document.getElementById("weather-icon").src = "animations/smoke.svg"
    }   
    else if(res.weather[0].main== "dust"){
        document.getElementById("weather-icon").src = "animations/dust.svg"
    }   
    else if(res.weather[0].main== "fog"){
        document.getElementById("weather-icon").src = "animations/fog.svg"
    }   
    else if(res.weather[0].main== "sand"){
        document.getElementById("weather-icon").src = "animations/sand.svg"
    }   
    else if(res.weather[0].main== "tornado"){
        document.getElementById("weather-icon").src = "animations/tornado.svg"
    }   

    console.log(res)
})
.catch((err) => {
    alert("msla")
}) 

}

//  // console.log(Math.round(res.main.feels_like))
//         // console.log(res.sys.country)
//         // console.log(res.weather[0].main)
//         // console.log(res.weather[0].description)






// Get the video
// var video = document.getElementById("myVideo");

// // Get the button
// var btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }