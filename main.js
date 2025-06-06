let url =
  "https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=d39a9be0c13741d28839052a910cb9b7";

let body = document.querySelector("body");
let convertFrom = document.querySelector("#convertFrom");
let convertTo = document.querySelector("#convertTo");
let input = document.querySelector("input");
let select = document.querySelector("select");

const btn = document.createElement("button");
btn.textContent = "Enter";
body.appendChild(btn);
// const btn=document.getElementsByTagName("button")
let div = document.createElement("div");
div.id = "flagContainer";
body.appendChild(div);
btn.addEventListener("click", (event) => {
  event.preventDefault();
  // showCountryIcon();
  let currentCurrencySelected = document.getElementById("convertFrom");
  // console.log(allCurrencyData)
  let image = document.createElement("img");
  image.src = allCurrencyData[currentCurrencySelected.value].icon;

  div.appendChild(image);
  console.log(div.children.length);
  while (div.children.length > 1) {
    div.removeChild(div.firstElementChild);
  }
});

body.appendChild(btn);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getCurrencies() {
  let result = await fetch(url);
  let currencies = await result.json();
  let currenciesArray = Object.entries(currencies.supportedCurrenciesMap);
  let countryCurrencies = currenciesArray.filter(
    (currency) =>
      currency[1].countryCode !== "Crypto" &&
      currency[1].countryCode !== "metal" &&
      currency[1].countryCode !== null
  );

  countryCurrencies = countryCurrencies.slice(0, 15);

  let currenciesData = {};
  for (currency of countryCurrencies) {
    currenciesData[currency[0]] = currency[1];
  }
  return currenciesData;
}

async function setCurrencyOptions(currencyData) {
  for (let currency of Object.entries(currencyData)) {
    let option = document.createElement("option");
    option.value = currency[0];
    option.textContent = currency[1].countryName;
    option.id = "currencyOption";
    document.getElementById("convertFrom").appendChild(option);
    // let option2 = option.cloneNode(true)
    // document.getElementById("convertTo").appendChild(option2)
    // console.log(currency);
    // await delay(1000);
  }
  // document.getElementById("convertTo").value ="MUR"
}
let allCurrencyData;

getCurrencies().then((result) => {
  allCurrencyData = result;
  setCurrencyOptions(result);
});

// async function showCountryIcon() {
//   // let countryCurrencies = await getCurrencies();
//   // let countryIcons ={};
//   // for(currency of countryCurrencies){
//   //   countryIcons[currency[0]]=currency[1].icon;
// }
// let countryIcons = countryCurrencies.m((currency) => {
//   return [currency[0], currency[1].icon];
// });
// console.log(countryIcons);
