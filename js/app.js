'use strict';

let storeDiv = document.getElementById('store');

// random number generator function grabbed from MDN docs
function randomCustPerHour(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}


let seattle = {
  name: 'Seattle',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,

  cookiesSoldPerHour: [],

  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
    console.log(this.custPerHour);
  },

  getCookiesSoldPerHour: function(){
    this.total = 0;

    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      let cookiePerHour = (Math.floor(this.custPerHour * this.avgCookieSale));
      this.cookiesSoldPerHour.push(cookiePerHour);
      this.total += cookiePerHour;

    }


  //  console.log(this.cookiesSoldPerHour);
  },

  render: function(){
    let divElem = document.createElement('div');
    storeDiv.appendChild(divElem);

    let h1Elem = document.createElement('h1');
    h1Elem.textContent = this.name;
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
  },


};

seattle.getCustPerHour();
seattle.getCookiesSoldPerHour();
seattle.render();
console.log(seattle);

console.log(seattle.avgCookieSale);
console.log(seattle.custPerHour);
// console.log(seattle.custPerHour * seattle.avgCookieSale);




let tokyo = {
  name: 'Tokyo',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: 0,
  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      this.cookiesSoldPerHour.push(this.custPerHour * this.avgCookieSale);
    }

  //  console.log(this.cookiesSoldPerHour);
  },
};

let dubai = {
  name: 'Dubai',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour: 0,
  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      this.cookiesSoldPerHour.push(this.custPerHour * this.avgCookieSale);
    }

  //  console.log(this.cookiesSoldPerHour);
  },
};

let paris = {
  name: 'Paris',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: 0,
  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      this.cookiesSoldPerHour.push(this.custPerHour * this.avgCookieSale);
    }

  //  console.log(this.cookiesSoldPerHour);
  },
};

let lima = {
  name: 'Lima',
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: 0,
  getCustPerHour: function(){
    this.custPerHour = randomCustPerHour(this.minCust, this.maxCust);
  },

  getCookiesSoldPerHour: function(){
    for(let i = 0; i <= this.hours.length; i++){
      this.getCustPerHour();
      this.cookiesSoldPerHour.push(this.custPerHour * this.avgCookieSale);
    }

  //  console.log(this.cookiesSoldPerHour);
  },
};





//   let liElem = createElement('li');
//   liElem.textContent = `${[i]}: ${cookiesSoldPerHour()}`
// }
    


// render: function(){

// }
// let ulElem = document.createElement('ul');
// articleElem.appendChild(ulElem);

// for(let i = 0; i < this.interests.length; i++){
//   let liElem = document.createElement('li');
//   liElem.textContent = this.interests[i];
//   ulElem.appendChild(liElem);
// }
