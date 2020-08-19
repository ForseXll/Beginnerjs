import { loader, jokeHolder } from './elements.js';

//names export
export async function getData()
{
    loader.classList.remove('hidden');
    jokeHolder.classList.add('hidden');
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await response.json();
    loader.classList.add('hidden');
    jokeHolder.classList.remove('hidden');
    return data;
}