import { jokeHolder, jokeButton } from './elements.js';
import { getData } from './index.js';
import { changeButton } from './util.js';
import buttonText from './buttontext.js';

//names export
export async function handleClick()
{
    const { joke } = await getData();
    jokeHolder.textContent = joke;
    jokeButton.textContent = changeButton(buttonText, jokeButton.textContent);
}