let body = document.querySelector("body");
let convertFrom = document.querySelector("#convertFrom")
let convertTo= document.querySelector("#convertTo")
const btn = document.createElement("button");
 let input = document.querySelector("input")
btn.textContent = "Exchange Now";
body.appendChild(btn);
// const url = 'https://exchange-rates7.p.rapidapi.com/convert?base=USD&target=JPY';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'b867df96b8mshb77efccd8066deep1385fajsne155a4a0b1a1',
// 		'x-rapidapi-host': 'exchange-rates7.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
let url =
  "https://api.currencyfreaks.com/v2.0/supported-currencies?apikey=d39a9be0c13741d28839052a910cb9b7";
  async function exchangeNow() {
  let exchange = await fetch (`https://api.currencyfreaks.com/v2.0/convert/latest?apikey=d39a9be0c13741d28839052a910cb9b7&from=${convertFrom.value}&to=${convertTo.value}&amount=${input.value}`)
  let exchangeData= await exchange.json();
  console.log(exchangeData)
  }
btn.addEventListener("click", (event)=>{
  event.preventDefault();
  exchangeNow();
})


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
    option.value=currency[1].currencyCode;
    option.textContent = currency[1].countryName;
    

    index++
    document.getElementById("convertFrom").appendChild(option)

    let option2 = option.cloneNode(true)
  
    
    document.getElementById("convertTo").appendChild(option2)
    if(index==100)break
    // console.log(currency);
    // await delay(1000);
  }
  document.getElementById("convertTo").value ="MUR"
}
currencyExchange();



