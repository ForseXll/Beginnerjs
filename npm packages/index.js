import wait from 'waait'; //wait function
import { name, address, company } from 'faker'; //bunch of fake data urls, pictures, names etc.
import { formatDistance, format } from 'date-fns';//date-fns is bunch of dates
import axios from 'axios'; //library similar to fetch 
import { fill } from 'lodash'; //bunch of small functions that do simple things very usefull
import to from 'await-to-js'; //for error catching 
const info = document.querySelector('.info');

//https://icanhazdadjoke.com , {
// headers: {
//     Accept: 'application/json',
//   },

const people = Array.from({ length: 10 }, list => { return `${name.firstName()} ${name.lastName()} lives at ${address.streetAddress()} ${address.city()}, ${address.stateAbbr()} and works at ${company.companyName()}.` });
// console.log(people);

function display(options)
{
    // console.log(options);
    const html = options.map(item =>
    {
        return `<p>${item}</p>`
    }
    );
    info.innerHTML = html;
}
display(people);

async function getData()
{
    const response = await axios.get(`https:icanhazdadjoke.com`, {
        headers: {
            Accept: 'application/json',
        }
    });
    console.log(response.data);
}
getData();

let Array1 = [];
let length = 20;

for (var i = 0; i < length; i++)
{
    Array1.push(fill(Array1, randomGen(), 0, 20));
}
// fill(Array1, '2', 0, 10);
console.log(Array1);
console.log(Math.floor(Math.random() * 20));

function randomGen()
{
    return Math.floor(Math.random() * 20);
}