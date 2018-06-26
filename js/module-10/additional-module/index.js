'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector("input");
  const submitBtn = document.querySelector(".js-submit");
  const result = document.querySelector(".js-result");
  const apiUrl = "https://restcountries.eu/rest/v2/name/";  
  

  submitBtn.addEventListener("click", fetchCountryData);


  function fetchCountryData(evt) {
    evt.preventDefault();
    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
  .then(response => {
    if(response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
  })
  .then(data => {
    const countryName = data[0].name;
    const capital = data[0].capital;
    const currency = data[0].currencies[0].name;
    const flag = data[0].flag;
    makeCardInfo(countryName, capital, currency, flag);
  })
  .catch(error => {
    console.log("Error: " + error);
  });
  }

  function makeCardInfo(name, cap, cur, fl) {
    const item = document.createElement('div');
    const countryName = document.createElement('p');
    const capital = document.createElement('p');
    const currency = document.createElement('p');
    const flag = document.createElement('img');
    flag.setAttribute('src', fl);
    countryName.textContent = name;
    capital.textContent = cap;
    item.classList.add('item');
    currency.textContent = cur;
    flag.classList.add('image');
    item.append(countryName, capital, currency, flag);
    result.appendChild(item);
  }
});
