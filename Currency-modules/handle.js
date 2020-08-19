import { convertAmount } from './convert.js';
import { formatCurrency } from './format.js';
export const fromSelect = document.querySelector('[name="from_currency"]');
export const toSelect = document.querySelector('[name="to_currency"]');
const inputAmount = document.querySelector('[name="from_amount"]');
const output = document.querySelector('.to_amount');


export async function handleInput(event)
{
    const amount = await convertAmount(inputAmount.value, fromSelect.value, toSelect.value);
    output.textContent = formatCurrency(amount, toSelect.value);
}

