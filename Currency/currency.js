const endPoint = `https://api.exchangeratesapi.io/latest`;
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const inputAmount = document.querySelector('[name="from_amount"]');
const form = document.querySelector('.app form');
const output = document.querySelector('.to_amount');
// const [label] = inputAmount.labels;



//my object to store currency already searched up
const storeCurrency = {};
//options of currency
const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};


async function getData(base = 'USD')
{
    const response = await fetch(`${endPoint}?base=${base}`);
    const data = await response.json();
    // console.log(data);
    return data;
}

function formatCurrency(amount, currency)
{
    return Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency,
        }).format(amount);
}
async function convertAmount(amount, from, to)
{
    //if not in our storage then fetch data and save it
    if (!storeCurrency[from])
    {
        const rates = await getData(from);
        //store it in our object
        storeCurrency[from] = rates;
    }
    //convert as it is passed in
    const rate = storeCurrency[from].rates[to];
    const convertedAmount = rate * amount;
    //console.log(`Converting ${amount} ${from} to ${convertedAmount} ${to}.`)
    return convertedAmount;
}

function generateOptions(options)
{
    getData();
    //console.log(options);
    return Object.entries(options).map(
        ([CurrencyCode, CuurrencyName]) => { return `<option value = "${CurrencyCode}" >${CurrencyCode} - ${CuurrencyName}</option> ` }).join('');
}

async function handleInput(event)
{
    const amount = await convertAmount(inputAmount.value, fromSelect.value, toSelect.value);
    output.textContent = formatCurrency(amount, toSelect.value);
}

const optionsHTML = generateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
// inputAmount.addEventListener('input', e => { label.textContent = formatCurrency(inputAmount.value.replace(/[$]+/, ""), fromSelect.value) })