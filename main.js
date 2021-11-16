// This time we're going to build a train fare calculator. Simple enough, right? 
// We're not looking for something too fancy, but you should be able to input your age and the distance you're travelling and get your ticket price.

// Instructions
// - Ask the user for their age and how far they are travelling (in km)
//    -- The price per travelled km will be £0.21
//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, show a message which tells the user how much they will pay for the ride.

// Challenge
// We're going to rewrite our program so that the user chooses a starting point and a destination from a list of stations, besides inputting their age and then get the ticket price. 
// You can come up with the stations' names and distances. Try also to code it so that you only need to change the price per km in one place, and all the stations should have the updated price

let age = Number(prompt("How old are you?"))
let km = Number(prompt("How far are you travelling?"))
const pricePerKm = 0.21;
let normalPrice = km*pricePerKm;
// const stations=['Tirana', 'London', 'Rome', 'Prishtina'];

alert(`You have to pay £${age<18?normalPrice*0.2:age>65?normalPrice*0.4:normalPrice} for the ride.`);