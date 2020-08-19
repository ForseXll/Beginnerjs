const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const displayItems = document.querySelector('.display');

async function getData(search)
{
    const result = await fetch(`${proxy}${baseEndpoint}?q=${search}`).catch(handleError);
    const data = await result.json();
    return data;
}

async function handleSubmit(event)
{
    event.preventDefault();
    const element = event.currentTarget;
    console.log(element.query.value);
    loadonPage(element.query.value);
}

function display(options)
{
    const html = options.results.map(item =>
    {
        return `<div class="items">
                <h2>${item.title}</h2>
                <p>${item.ingredients}</p>
                ${item.thumbnail && `<img src="${item.thumbnail}" alt="${item.title}/>`}
                <a href="${item.href}">recipe Here</a>
                </div>`
    }
    );
    displayItems.innerHTML = html.join('');
}

async function loadonPage(query)
{
    form.submit.disabled = true;
    const resources = await getData(query);
    form.submit.disabled = false;
    display(resources);
}

function handleError(error)
{
    console.log("Error");
    console.log(error);
}

form.addEventListener('submit', handleSubmit);
loadonPage('');