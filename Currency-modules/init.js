import currencies from './currency.js';
import { handleInput, fromSelect, toSelect } from './handle.js';
import { generateOptions } from './generate.js';
const form = document.querySelector('.app form');

export function init()
{
    //creating html
    const optionsHTML = generateOptions(currencies);
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
    //listen to inputs
    form.addEventListener('input', handleInput);
}

// const [label] = inputAmount.labels;
// inputAmount.addEventListener('input', e => { label.textContent = formatCurrency(inputAmount.value.replace(/[$]+/, ""), fromSelect.value) })