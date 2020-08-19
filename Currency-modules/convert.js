import { getData } from './getData.js';
const storeCurrency = {};

export async function convertAmount(amount, from, to)
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