let xhr;
let lat="20.296059";
let lon="85.824539";
let APIkey="d6e770d3e2d0f454e1b57e12840a43de"
// let APIkey="473cbc3b4ad606591022abbffa14f344";
let source=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
function getWeather(){
    xhr=new XMLHttpRequest();                    // xhr is a object
    xhr.onreadystatechange=process_responce;     //these are it's method
    xhr.open("get",source,true);
    xhr.send(null);                              //as we are only fetching the data
}
function  process_responce(){
    console.log(xhr.readyState)
    if(xhr.readyState==4){
        let str=xhr.responseText;
        console.log(xhr.responseText);
        let obj=JSON.parse(str)
        console.log(obj)
        let weather=obj.main.temp;
        weather=parseInt(weather-273)+"°C" ;
        let span=document.getElementById("weather");
        span.innerHTML=weather;
    }
}
fetch(source)
.then((data) => {
    data.json();
})
.then((res) => {
    console.log(res);
})
getWeather()