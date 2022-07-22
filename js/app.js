'use strict';

let renderHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let myform = document.getElementById('my-form');

// Link to the sales.html page
let storeDiv = document.getElementById('store');

// random number generator function grabbed from MDN docs
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}


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


// Create prototypes for the functions that will need to be run

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



// Create table and append to the div on sales.html
let tableElem = document.createElement('table');
storeDiv.appendChild(tableElem);

// Write a function for the header row
function headerRow(){

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let thEmptyCell = document.createElement('th');
  row1.appendChild(thEmptyCell);

  for(let i = 0; i < renderHours.length; i++){
    let th1Elem = document.createElement('th');
    th1Elem.textContent = `${renderHours[i]}`;
    row1.appendChild(th1Elem);
  }

  let tdTotal = document.createElement('td');
  tdTotal.textContent = 'TOTAL / day:';
  row1.appendChild(tdTotal);

}

// Function for the table of all stores' information
Store.prototype.render = function(){

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let tdCityName = document.createElement('th');
  tdCityName.textContent = `${this.city}`;
  row2.appendChild(tdCityName);

  for(let i = 0; i < this.hours.length; i++){
    let tdCookiesPerHour = document.createElement('td');
    tdCookiesPerHour.textContent = `${this.cookiesSoldPerHour[i]}`;
    row2.appendChild(tdCookiesPerHour);
  }
 
  let tdDailyTotal = document.createElement('td');
  tdDailyTotal.textContent = `${this.total}`;
  row2.appendChild(tdDailyTotal);

  console.log(storeInfo);
};

// Write a function for the footer row
function footerRow(){

  let row3 = document.createElement('tr');
  row3.id = 'lastRow';
  tableElem.appendChild(row3);

  let tdTotal = document.createElement('td');
  tdTotal.textContent = 'TOTALS';
  row3.appendChild(tdTotal);

  let grandTotal = 0;

  for(let i = 0; i < renderHours.length; i++){
    let total = 0;
    for(let j = 0; j < storeInfo.length; j++){
      total = total + storeInfo[j].cookiesSoldPerHour[i];
      grandTotal = grandTotal + storeInfo[j].cookiesSoldPerHour[i];
    }

    let tdDailyTotals = document.createElement('td');
    tdDailyTotals.textContent = `${total}`;
    row3.appendChild(tdDailyTotals);
  }

  let GrandTotal = document.createElement('td');
  GrandTotal.textContent = `${grandTotal}`;
  row3.appendChild(GrandTotal);
}

// Create an object for each city's store

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// Create a function that calls the functions needed in each created object

function renderStore(){
  for(let i = 0; i < storeInfo.length; i++){
    let currentStore = storeInfo[i];
    currentStore.getCookiesSoldPerHour();
    currentStore.getCustPerHour();
    currentStore.render();
  }
}

// Call all functions
headerRow();
renderStore();
footerRow();


// FORM

// Add the event listener
myform.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();

  let city = event.target.city.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookieSale = event.target.avgCookieSale.value;

  let newStore = new Store(city, minCust, maxCust, avgCookieSale);

  newStore.getCustPerHour();
  newStore.getCookiesSoldPerHour();
  newStore.render();

  let row = document.getElementById('lastRow');
  console.log(row);
  row.remove();  

  footerRow();

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

// seattle.getCustPerHour();
// seattle.getCookiesSoldPerHour();
// seattle.render();


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

// tokyo.getCustPerHour();
// tokyo.getCookiesSoldPerHour();
// tokyo.render();

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

// dubai.getCustPerHour();
// dubai.getCookiesSoldPerHour();
// dubai.render();

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

// paris.getCustPerHour();
// paris.getCookiesSoldPerHour();
// paris.render();

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

// lima.getCustPerHour();
// lima.getCookiesSoldPerHour();
// lima.render();
