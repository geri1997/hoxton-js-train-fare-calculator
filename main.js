// let age = Number(prompt("How old are you?"))
// let km = Number(prompt("How far are you travelling?"))
// const pricePerKm = 0.21;
// let normalPrice = km*pricePerKm;

// // const stations=['Tirana', 'London', 'Rome', 'Prishtina'];

// alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);



//challenge below
const tiranaLondon = 2000;
const tiranaRome = 500;
const tiranaPrishtina = 200;
const LondonRome = 1200;
const LondonPrishtina = 2500;
const RomePrishtina = 700;




 let  age = Number(prompt("How old are you?"))

 let  start = prompt(`
 Where from?
 Stations to choose from: "Tirana, London, Rome, Prishtina"
 `);
 let  destination = prompt(`Where to?
 Stations to choose from: "Tirana, London, Rome, Prishtina"`);
 const pricePerKm = 0.21;
 
 const km= start.toLowerCase()===`tirana` && destination.toLowerCase() ===`prishtina`? tiranaPrishtina:
 start.toLowerCase()===`tirana` && destination.toLowerCase() ===`london`?tiranaLondon:
 start.toLowerCase()===`tirana` && destination.toLowerCase() ===`rome`?tiranaRome:
 start.toLowerCase()===`tirana` && destination.toLowerCase() ===`tirana`?0:
 start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`tirana`?tiranaPrishtina:
 start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`London`?LondonPrishtina:
 start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`rome`?RomePrishtina:
 start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`prishtina`?0:
 start.toLowerCase()===`london` && destination.toLowerCase() ===`tirana`?tiranaLondon:
 start.toLowerCase()===`london` && destination.toLowerCase() ===`london`?0:
 start.toLowerCase()===`london` && destination.toLowerCase() ===`rome`?LondonRome:
 start.toLowerCase()===`london` && destination.toLowerCase() ===`prishtina`?LondonPrishtina:
 start.toLowerCase()===`rome` && destination.toLowerCase() ===`tirana`?tiranaRome:
 start.toLowerCase()===`rome` && destination.toLowerCase() ===`london`?LondonRome:
 start.toLowerCase()===`rome` && destination.toLowerCase() ===`rome`?0:
 start.toLowerCase()===`rome` && destination.toLowerCase() ===`prishtina`?RomePrishtina:
 `Can't you read?`;
 let normalPrice = km*pricePerKm;

 alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);