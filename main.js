let body = document.querySelector("body");

const btn = document.createElement("button");
btn.textContent = "Exchange Now";
body.appendChild(btn);

let url =
  "https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=d39a9be0c13741d28839052a910cb9b7";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


async function currencyExchange() {
  let result = await fetch(url);
  let currencies = await result.json();
  //   for (let currency of Object.entries(currencies.supportedCurrenciesMap)) {
  //     console.log(currency);
  //     await delay(1000);
  //   };
  // console.log(currencies)
  let currenciesArray = Object.entries(currencies.supportedCurrenciesMap);
  let countryCurrencies = currenciesArray.filter(
    (currency) =>
      currency[1].countryCode !== "Crypto" &&
      currency[1].countryCode !== "metal" &&
      currency[1].countryCode !== null
  );
  let index = 0
  for (let currency of countryCurrencies) {
    console.log(currency)
    let option = document.createElement("option");
    option.value=currency[1].countryName;
    option.textContent = currency[1].countryName;
    
    index++
    document.getElementById("convertFrom").appendChild(option)
    document.getElementById("convertTo").appendChild(option)
    if(index==55)break
    // console.log(currency);
    // await delay(1000);
  }
}
currencyExchange();

// async function exchangeNow(currency) {
//   let amount = 
//   let exchangeRate = await fetch ('https://api.currencyfreaks.com/v2.0/convert/latest?apikey=YOUR_APIKEY&from=USD&to=PKR&amount=')
// }
