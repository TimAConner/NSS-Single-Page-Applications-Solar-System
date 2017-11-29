let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

let el = document.getElementById("planets");


// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalize(planets){
    let planetsCapitalized = planets.map(x => `${x[0].toUpperCase()}${x.slice(1, x.length)}`);
    return planetsCapitalized;
}

outputPlanets(capitalize(planets), "Planets Capitalized");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function outputPlanets(planets, header){
    let h1DOM = document.createElement("h3");
    let textNode = document.createTextNode(header);
    h1DOM.appendChild(textNode);
    el.appendChild(h1DOM);

    planets.forEach(function(element){
        let h1DOM = document.createElement("h4");
        let textNode = document.createTextNode(element);
        h1DOM.appendChild(textNode);
        el.appendChild(h1DOM);
    });
}


// Use the filter method to create a new array that contains planets with the letter 'e'

function filterPlanets(planets, letter){
    let filteredPlanets = planets.filter(planet => planet.toLowerCase().indexOf(letter) !== -1);
    return filteredPlanets;
}

outputPlanets(filterPlanets(capitalize(planets), "e"), "Planets with E");



// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]; 
function reduceArray(sentenceArray){
       
}