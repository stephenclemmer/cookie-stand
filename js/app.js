'use strict';

let seattle = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: 0,
  getCustPerHour: function(){
    this.custPerHour = `${randomCustPerHour(this.minCust, this.maxCust)}`;
  }
};

console.log(seattle);

let tokyo = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
};

let dubai = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
};

let paris = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
};

let lima = {
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
};

// grabbed from MDN docs
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}
