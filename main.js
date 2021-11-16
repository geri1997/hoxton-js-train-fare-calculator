// let age = Number(prompt("How old are you?"))
// let km = Number(prompt("How far are you travelling?"))
// const pricePerKm = 0.21;
// let normalPrice = km*pricePerKm;

// // const stations=['Tirana', 'London', 'Rome', 'Prishtina'];

// alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);



//challenge below


 let  age = Number(prompt("How old are you?"))

 let  start = prompt(`
 Where from?
 Stations to choose from: "Tirana, London, Rome, Prishtina"
 `);
 let  destination = prompt(`Where to?
 Stations to choose from: "Tirana, London, Rome, Prishtina"`);
 const pricePerKm = 0.21;
 
 const km= start.toLowerCase()===`tirana` && destination.toLowerCase() ===`prishtina`? 200:start.toLowerCase()===`tirana` && destination.toLowerCase() ===`london`?1000:start.toLowerCase()===`tirana` && destination.toLowerCase() ===`rome`?500:start.toLowerCase()===`tirana` && destination.toLowerCase() ===`tirana`?0:start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`tirana`?200:start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`London`?2500:start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`rome`?700:start.toLowerCase()===`prishtina` && destination.toLowerCase() ===`prishtina`?0:start.toLowerCase()===`london` && destination.toLowerCase() ===`tirana`?2000:start.toLowerCase()===`london` && destination.toLowerCase() ===`london`?0:start.toLowerCase()===`london` && destination.toLowerCase() ===`rome`?1200:start.toLowerCase()===`london` && destination.toLowerCase() ===`prishtina`?2500:start.toLowerCase()===`rome` && destination.toLowerCase() ===`tirana`?500:start.toLowerCase()===`rome` && destination.toLowerCase() ===`london`?1200:start.toLowerCase()===`rome` && destination.toLowerCase() ===`rome`?0:start.toLowerCase()===`rome` && destination.toLowerCase() ===`prishtina`?700:`Can't you read?`;
 let normalPrice = km*pricePerKm;

 alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);