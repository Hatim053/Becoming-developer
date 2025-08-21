// currency conversion api : https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json

// country flag api : https://flagcdn.com/w40/${country}.png

const currencies = {
  "AED": "AE",
  "AFN": "AF",
  "ALL": "AL",
  "AMD": "AM",
  "ANG": "CW",
  "AOA": "AO",
  "ARS": "AR",
  "AUD": "AU",
  "AWG": "AW",
  "AZN": "AZ",
  "BAM": "BA",
  "BBD": "BB",
  "BDT": "BD",
  "BGN": "BG",
  "BHD": "BH",
  "BIF": "BI",
  "BMD": "BM",
  "BND": "BN",
  "BOB": "BO",
  "BRL": "BR",
  "BSD": "BS",
  "BTN": "BT",
  "BWP": "BW",
  "BYN": "BY",
  "BZD": "BZ",
  "CAD": "CA",
  "CDF": "CD",
  "CHF": "CH",
  "CLP": "CL",
  "CNY": "CN",
  "COP": "CO",
  "CRC": "CR",
  "CUP": "CU",
  "CVE": "CV",
  "CZK": "CZ",
  "DJF": "DJ",
  "DKK": "DK",
  "DOP": "DO",
  "DZD": "DZ",
  "EGP": "EG",
  "ERN": "ER",
  "ETB": "ET",
  "EUR": "EU",
  "FJD": "FJ",
  "FKP": "FK",
  "GBP": "GB",
  "GEL": "GE",
  "GHS": "GH",
  "GIP": "GI",
  "GMD": "GM",
  "GNF": "GN",
  "GTQ": "GT",
  "GYD": "GY",
  "HKD": "HK",
  "HNL": "HN",
  "HRK": "HR",
  "HTG": "HT",
  "HUF": "HU",
  "IDR": "ID",
  "ILS": "IL",
  "INR": "IN",
  "IQD": "IQ",
  "IRR": "IR",
  "ISK": "IS",
  "JMD": "JM",
  "JOD": "JO",
  "JPY": "JP",
  "KES": "KE",
  "KGS": "KG",
  "KHR": "KH",
  "KMF": "KM",
  "KRW": "KR",
  "KWD": "KW",
  "KYD": "KY",
  "KZT": "KZ",
  "LAK": "LA",
  "LBP": "LB",
  "LKR": "LK",
  "LRD": "LR",
  "LSL": "LS",
  "LYD": "LY",
  "MAD": "MA",
  "MDL": "MD",
  "MGA": "MG",
  "MKD": "MK",
  "MMK": "MM",
  "MNT": "MN",
  "MOP": "MO",
  "MRU": "MR",
  "MUR": "MU",
  "MVR": "MV",
  "MWK": "MW",
  "MXN": "MX",
  "MYR": "MY",
  "MZN": "MZ",
  "NAD": "NA",
  "NGN": "NG",
  "NIO": "NI",
  "NOK": "NO",
  "NPR": "NP",
  "NZD": "NZ",
  "OMR": "OM",
  "PAB": "PA",
  "PEN": "PE",
  "PGK": "PG",
  "PHP": "PH",
  "PKR": "PK",
  "PLN": "PL",
  "PYG": "PY",
  "QAR": "QA",
  "RON": "RO",
  "RSD": "RS",
  "RUB": "RU",
  "RWF": "RW",
  "SAR": "SA",
  "SBD": "SB",
  "SCR": "SC",
  "SDG": "SD",
  "SEK": "SE",
  "SGD": "SG",
  "SHP": "SH",
  "SLE": "SL",
  "SOS": "SO",
  "SRD": "SR",
  "STN": "ST",
  "SVC": "SV",
  "SZL": "SZ",
  "THB": "TH",
  "TJS": "TJ",
  "TMT": "TM",
  "TND": "TN",
  "TOP": "TO",
  "TRY": "TR",
  "TTD": "TT",
  "TWD": "TW",
  "TZS": "TZ",
  "UAH": "UA",
  "UGX": "UG",
  "USD": "US",
  "UYU": "UY",
  "UZS": "UZ",
  "VES": "VE",
  "VND": "VN",
  "VUV": "VU",
  "WST": "WS",
  "YER": "YE",
  "ZAR": "ZA",
  "ZMW": "ZM",
  "ZWL": "ZW"
};


const toFlag = document.querySelector('#toFlag');
const fromFlag = document.querySelector('#fromFlag');
const fromCurr = document.querySelector('.fromCurr');
const toCurr = document.querySelector('.toCurr');
const conversionAmount = document.querySelector('#amount');
const submitBtn = document.querySelector('#submitBtn');
const conversion = document.querySelector('#conversion');
const currentRate = document.querySelector('#currentRate');

for(const key in currencies) {
const option1 = document.createElement('option');
const option2 = document.createElement('option');
option1.value = currencies[key];
option1.innerText = key;
option2.value = currencies[key];
option2.innerText = key;
fromCurr.appendChild(option1);
toCurr.appendChild(option2);
}




fromCurr.addEventListener('click' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    fromFlag.src = `https://flagcdn.com/w40/${((fromCurr.value).toLowerCase())}.png`;
})
toCurr.addEventListener('click' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    toFlag.src = `https://flagcdn.com/w40/${((toCurr.value).toLowerCase())}.png`;
})

submitBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    const amount = Number(conversionAmount.value);
    const from = fromCurr.options[fromCurr.selectedIndex].innerText;
    const to = toCurr.options[toCurr.selectedIndex].innerText;
    // fetching Currency Rate
     fetch(`https://anyapi.io/api/v1/exchange/convert?base=${from}&to=${to}&amount=${amount}&apiKey=5gt93ql6vcoohh5prvmvughq2jdjdr3ugquroael1ii83rvfp3sooug`).then((response) => {
       let data = response.json();
        return data;
    }).then((data) => {
       conversion.innerText = `${amount} ${from} = ${data.conerted} ${to}`;
       currentRate.innerText = `$ 1 {from} = ${data.rate} ${to}`;
    }).catch((error) => {
        console.log(error);
    })
    
})

async function getconversion(baseCurrency) {
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json`)
    let data = response.json();
    return data;
}
