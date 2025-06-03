let body = document.querySelector("body");
const input = document.createElement("input");
input.setAttribute("id", "initialValue");
input.type = "text";
input.placeholder = "From";
body.appendChild(input);


let url = `https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=d39a9be0c13741d28839052a910cb9b7`;
const API_KEY = "d39a9be0c13741d28839052a910cb9b7";

async function currencyExchange() {
  let result = await fetch(url);
  let currencies = await result.json();
  for (currency of currencies) {
    const option = document.createElement("option");
    option.value = currency.countryCode;
    option.textContent = option.value;
    body.appendChild(option);
  }

  console.log(currency); //filter out all the ones with country code crypto
  //
}
currencyExchange();

// for (result of data.results) {
//     // console.log(result.percentage);
//     if (result.percentage > maxPercent) {
//     //   console.log(maxPercent);
//       maxPercent = result.percentage;
//       language = result;
//     }
//   }
//   console.log(language);

// let url = `https://api.languagelayer.com/languages?access_key=7a9f65600136e76725567cf0cb79fef6`;

// let text = "Hi";
// let url = `https://api.languagelayer.com/detect?access_key=7a9f65600136e76725567cf0cb79fef6&query=${text}`;
// const API_KEY = "7a9f65600136e76725567cf0cb79fef6";
