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
 start.toLowerCase().replaceAll(' ','')===`tirana` && destination.toLowerCase().replaceAll(' ','') ===`london`?tiranaLondon:
 start.toLowerCase().replaceAll(' ','')===`tirana` && destination.toLowerCase().replaceAll(' ','') ===`rome`?tiranaRome:
 start.toLowerCase().replaceAll(' ','')===`tirana` && destination.toLowerCase().replaceAll(' ','') ===`tirana`?0:
 start.toLowerCase().replaceAll(' ','')===`prishtina` && destination.toLowerCase().replaceAll(' ','') ===`tirana`?tiranaPrishtina:
 start.toLowerCase().replaceAll(' ','')===`prishtina` && destination.toLowerCase().replaceAll(' ','') ===`London`?LondonPrishtina:
 start.toLowerCase().replaceAll(' ','')===`prishtina` && destination.toLowerCase().replaceAll(' ','') ===`rome`?RomePrishtina:
 start.toLowerCase().replaceAll(' ','')===`prishtina` && destination.toLowerCase().replaceAll(' ','') ===`prishtina`?0:
 start.toLowerCase().replaceAll(' ','')===`london` && destination.toLowerCase().replaceAll(' ','') ===`tirana`?tiranaLondon:
 start.toLowerCase().replaceAll(' ','')===`london` && destination.toLowerCase().replaceAll(' ','') ===`london`?0:
 start.toLowerCase().replaceAll(' ','')===`london` && destination.toLowerCase().replaceAll(' ','') ===`rome`?LondonRome:
 start.toLowerCase().replaceAll(' ','')===`london` && destination.toLowerCase().replaceAll(' ','') ===`prishtina`?LondonPrishtina:
 start.toLowerCase().replaceAll(' ','')===`rome` && destination.toLowerCase().replaceAll(' ','') ===`tirana`?tiranaRome:
 start.toLowerCase().replaceAll(' ','')===`rome` && destination.toLowerCase().replaceAll(' ','') ===`london`?LondonRome:
 start.toLowerCase().replaceAll(' ','')===`rome` && destination.toLowerCase().replaceAll(' ','') ===`rome`?0:
 start.toLowerCase().replaceAll(' ','')===`rome` && destination.toLowerCase().replaceAll(' ','') ===`prishtina`?RomePrishtina:
 alert(`Can't you read?`);
 let normalPrice = km*pricePerKm;
 let stations=['tirana','rome','london','prishtina']
 if(age<0 || Number.isNaN(age)){
    alert('Wrong age')
    
 }else if(!stations.includes(start.toLowerCase())){
    alert('Wrong station')
} else if(!stations.includes(destination.toLowerCase())){
    alert('Wrong station')
}else{
 alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);
}