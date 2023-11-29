import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName=generateName();
console.log(`Hello from ${sillyName}`);

var supe=superheroes.random();
console.log(`I am ${supe}!`);