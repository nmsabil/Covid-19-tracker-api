const countries = document.querySelector("datalist");
const search = document.querySelector("#search");
const date = document.querySelector("#date");
const nameCountry = document.querySelector("#name-country");
const confirmed = document.querySelector(".confirmed");
const deaths = document.querySelector(".deaths");
const recovered = document.querySelector(".recovered");
const chart = document.querySelector(".chart");

let dataChart = [];

const API_URL = "https://api.covid19api.com/summary";

async function covid() {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);

  if (res.status === 4 || res.status === 200) {
    date.textContent = new Date(data.Date).toDateString();
    const {
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
    } = data.Global;
    // Total Confirmed
    confirmed.children[1].textContent = TotalConfirmed;
    confirmed.children[2].textContent = NewConfirmed;
    // Total Deaths
    deaths.children[1].textContent = TotalDeaths;
    deaths.children[2].textContent = NewDeaths;
    // Total Recovered
    recovered.children[1].textContent = TotalRecovered;
    recovered.children[2].textContent = NewRecovered;
  } else {
    chart.innerHTML = `<h2>Loading...<.h2>`;
  }
}
covid();
