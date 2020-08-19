import { getData } from './getData.js';
export function generateOptions(options)
{
    getData();
    //console.log(options);
    return Object.entries(options).map(
        ([CurrencyCode, CuurrencyName]) => { return `<option value = "${CurrencyCode}" >${CurrencyCode} - ${CuurrencyName}</option> ` }).join('');
}