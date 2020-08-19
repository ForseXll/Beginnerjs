import { handleClick } from './handle.js';
import { getData } from './index.js';
import { jokeButton } from './elements.js';

jokeButton.addEventListener('click', handleClick);

getData();