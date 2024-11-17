function call(city) {

    let API_Key = "5833b36c07ec07b9f016037a9ec3a4ee";

    spin.innerHTML = "loading...."
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)

        .then((response) => response.json())

        .then((data) => {
            spin.style.display = "none"
            force.style.display = "block"
            maindiv.style.display = "block"
            spin.innerHTML = ""

            console.log(city, data)
            nameofcity.innerHTML = city;

            temp.innerHTML = data.main.temp + " ºC";

            hum.innerHTML = "Humidity : " + data.main.humidity;

            max.innerHTML = "Max-Temp : " + data.main.temp_max + " ºC";

            min.innerHTML = "Min-Temp : " + data.main.temp_min + " ºC";

            weather.innerHTML = "Weather : " + data.weather[0].main;
        })
        .catch((error) => {
            spin.style.display="block"
            spin.innerHTML = " Data not found ....."
            force.style.display = "none"
            maindiv.style.display = "none"
        })
}
input1.addEventListener("keypress", function (event) {
    if (input1.value) {
        if (event.key === "Enter") {
            search();
        }
    }
});


function search() {
    if (input1.value) {
        let city = input1.value.slice(0,1).toUpperCase()+input1.value.slice(1).toLowerCase();
        input1.value = "";
        call(city)
    }


}



function togbut() {
    let ul = document.querySelector(".ul1")
    ul.classList.toggle("ul2");

}

navigator.geolocation.getCurrentPosition((data)=>{
    console.log(data,data.coords.longitude ,data.coords.latitude)
      get(data.coords.latitude, data.coords.longitude)
     },(error)=>{
           console.log(error)
           call("Delhi")
     })

     


     function get(latitude, longitude){
        console.log("i am get")
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=5833b36c07ec07b9f016037a9ec3a4ee`)
        .then((response)=>{ console.log(response)
             return response.json()})
        .then((data)=>{console.log(data.name)
                  call(data.name)
        })
        .catch((error)=>{
               call("delhi")
        })
     }