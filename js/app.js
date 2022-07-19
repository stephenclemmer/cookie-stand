'use strict';

let storeDiv = document.getElementById('store');

// random number generator function grabbed from MDN docs
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}


// let seattle = {
//   city: 'Seattle',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,

//   custPerHour: 0,
//   cookiesSoldPerHour: [],
//   total: 0,

//   getCustPerHour: function(){
//     this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
//     // console.log(this.custPerHour);
//   },

//   getCookiesSoldPerHour: function(){

//     for(let i = 0; i <= this.hours.length; i++){
//       this.getCustPerHour();
//       let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
//       this.cookiesSoldPerHour.push(cookiePerHour);
//       this.total += cookiePerHour;
//     }
//   },

//   render: function(){
//     let divElem = document.createElement('div');
//     storeDiv.appendChild(divElem);

//     let h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.city;
//     divElem.appendChild(h1Elem);

//     let ulElem = document.createElement('ul');
//     divElem.appendChild(ulElem);

//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(liElem);
//   },

// };

// Refactoring by creating a constructor to handle the information for each store.
let storeInfo = [];

function Store (city, minCust, maxCust, avgCookieSale){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.custPerHour = 0;
  this.cookiesSoldPerHour = [];
  this.total = 0;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  storeInfo.push(this);
}

Store.prototype.getCustPerHour = function(){
  this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
};

Store.prototype.getCookiesSoldPerHour = function(){

  for(let i = 0; i <= this.hours.length; i++){
    this.getCustPerHour();
    let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
    this.cookiesSoldPerHour.push(cookiePerHour);
    this.total += cookiePerHour;
  }
};

Store.prototype.render = function(){
  let divElem = document.createElement('div');
  storeDiv.appendChild(divElem);

  let h1Elem = document.createElement('h1');
  h1Elem.textContent = this.city;
  divElem.appendChild(h1Elem);

  let ulElem = document.createElement('ul');
  divElem.appendChild(ulElem);

  for(let i = 0; i < this.hours.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }

  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.total}`;
  ulElem.appendChild(liElem);
};


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


seattle.getCustPerHour();
seattle.getCookiesSoldPerHour();
seattle.render();




// let tokyo = {
//   city: 'Tokyo',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
 
//   cookiesSoldPerHour: [],

//   getCustPerHour: function(){
//     this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
//     console.log(this.custPerHour);
//   },

//   getCookiesSoldPerHour: function(){
//     this.total = 0;

//     for(let i = 0; i <= this.hours.length; i++){
//       this.getCustPerHour();
//       let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
//       this.cookiesSoldPerHour.push(cookiePerHour);
//       this.total += cookiePerHour;
//     }
//   },

//   render: function(){
//     let divElem = document.createElement('div');
//     storeDiv.appendChild(divElem);

//     let h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.city;
//     divElem.appendChild(h1Elem);

//     let ulElem = document.createElement('ul');
//     divElem.appendChild(ulElem);

//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(liElem);
//   },

// };

tokyo.getCustPerHour();
tokyo.getCookiesSoldPerHour();
tokyo.render();

// let dubai = {
//   city: 'Dubai',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,

//   cookiesSoldPerHour: [],

//   getCustPerHour: function(){
//     this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
//     console.log(this.custPerHour);
//   },

//   getCookiesSoldPerHour: function(){
//     this.total = 0;

//     for(let i = 0; i <= this.hours.length; i++){
//       this.getCustPerHour();
//       let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
//       this.cookiesSoldPerHour.push(cookiePerHour);
//       this.total += cookiePerHour;
//     }
//   },

//   render: function(){
//     let divElem = document.createElement('div');
//     storeDiv.appendChild(divElem);

//     let h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.city;
//     divElem.appendChild(h1Elem);

//     let ulElem = document.createElement('ul');
//     divElem.appendChild(ulElem);

//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(liElem);
//   },

// };

dubai.getCustPerHour();
dubai.getCookiesSoldPerHour();
dubai.render();

// let paris = {
//   city: 'Paris',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
  
//   cookiesSoldPerHour: [],

//   getCustPerHour: function(){
//     this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
//     console.log(this.custPerHour);
//   },

//   getCookiesSoldPerHour: function(){
//     this.total = 0;

//     for(let i = 0; i <= this.hours.length; i++){
//       this.getCustPerHour();
//       let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
//       this.cookiesSoldPerHour.push(cookiePerHour);
//       this.total += cookiePerHour;
//     }
//   },

//   render: function(){
//     let divElem = document.createElement('div');
//     storeDiv.appendChild(divElem);

//     let h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.city;
//     divElem.appendChild(h1Elem);

//     let ulElem = document.createElement('ul');
//     divElem.appendChild(ulElem);

//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(liElem);
//   },

// };

paris.getCustPerHour();
paris.getCookiesSoldPerHour();
paris.render();

// let lima = {
//   city: 'Lima',
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
 
//   cookiesSoldPerHour: [],

//   getCustPerHour: function(){
//     this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
//     console.log(this.custPerHour);
//   },

//   getCookiesSoldPerHour: function(){
//     this.total = 0;

//     for(let i = 0; i <= this.hours.length; i++){
//       this.getCustPerHour();
//       let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
//       this.cookiesSoldPerHour.push(cookiePerHour);
//       this.total += cookiePerHour;
//     }
//   },

//   render: function(){
//     let divElem = document.createElement('div');
//     storeDiv.appendChild(divElem);

//     let h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.city;
//     divElem.appendChild(h1Elem);

//     let ulElem = document.createElement('ul');
//     divElem.appendChild(ulElem);

//     for(let i = 0; i < this.hours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(liElem);
//   },

// };

lima.getCustPerHour();
lima.getCookiesSoldPerHour();
lima.render();
