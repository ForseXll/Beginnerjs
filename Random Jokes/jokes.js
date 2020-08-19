const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');


const buttonText = [
    'Ugh...',
    'why are you doing this',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
    'face palm',
    'this isn not funny',
    'bruh get a laugh',
];

async function getData()
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

function changeButton(array, not)
{
    const item = array[Math.floor(Math.random() * array.length)];
    if (item === not)
    {
        return changeButton(array, not);
    }
    return item;
}

async function handleClick()
{
    const { joke } = await getData();
    jokeHolder.textContent = joke;
    jokeButton.textContent = changeButton(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);

getData();