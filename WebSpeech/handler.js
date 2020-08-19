import { isValidColor } from './colors.js';

export function handleEvent(event)
{
    //pull results into results and create words to store strings from transcript
    const results = event.results;
    // console.log(results);
    const words = event.results[results.length - 1][0].transcript;
    //lower case everything and change variable to let so we can manipulate it
    let color = words.toLowerCase();
    //remove any spaces from words
    color = color.replace(/\s/g, '');
    //check if the word is a valid color?
    if (!isValidColor(color)) //if not don't return anywords
    {
        return;
    }
    console.log(color);
    //if the color exists then change UI
    const spanItem = document.querySelector(`.${color}`);
    console.log(spanItem);
    spanItem.classList.add('got');
    //changing background color as well
    // console.log(document.body.style.backgroundColor = color);
    document.body.style.backgroundColor = color;
}

