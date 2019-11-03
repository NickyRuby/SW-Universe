

const button = document.getElementById('btn');

const url = 'http://starwars.andgein.ru/api/';

let attr = 'planets'
let xhr = new XMLHttpRequest();
xhr.responseType = 'json';


xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let planets = xhr.response.results;
        let number = generatePlanetNumber(planets);
        result = planets[number].name;
        showName(result);
    }

}

xhr.open('GET', url + attr);
xhr.send()


function generatePlanetNumber(res){
    return Math.floor(Math.random() * res.length);
}

function showName(planet){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<h1 style="text-align:center">Hey! Your planet is ${planet}</h1>`;
    document.body.append(newDiv);
}

// gets picture of Planet from Google
function makeQueryToGoogle(query){

}


// button.addEventListener('click', makeMagic);


// get planets
// generate random number
// return name 


