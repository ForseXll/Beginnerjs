// Make a div
const mydiv = document.createElement('div');

// add a class of wrapper to it
mydiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(mydiv);

// make an unordered list
const mylist = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = `One`;
li2.textContent = `Two`;
li3.textContent = `Three`;

// put that list into the above wrapper
mydiv.appendChild(mylist);
mylist.appendChild(li1);
mylist.appendChild(li2);
mylist.appendChild(li3);

// create an image
const image = document.createElement('img');

// set the source to an image
image.src = './2BBb.jpg';

// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add("Sexy");
// add an alt of Cute Puppy
image.alt = "2B";
// Append that image to the wrapper
mydiv.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="NewDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;
// put this div before the unordered list from above+
//one way to do it
//mylist.insertAdjacentHTML("beforebegin", myHTML);
//other way to do it!!!!
const fragment = document.createRange().createContextualFragment(myHTML);
mylist.parentNode.insertBefore(fragment, mylist);

// add a class to the second paragraph called warning
//this works but if you add something on top it will mess things up
// const myDiv = mydiv.firstElementChild;
const myDiv = mydiv.querySelector(".NewDiv");
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height)
{
    return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their height is ${height}cm and are ${age} years old. In Dog years this person would be ${age * 7} years old. That would be a old dog!</p>
        <button class="delete" type="button" >Delete</Button>
    </div>
    `;
};

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardlist = generatePlayerCard('Ying', 26, 166);
cardlist += generatePlayerCard('Ilya', 27, 178);
cardlist += generatePlayerCard('Peggy', 20, 156);
cardlist += generatePlayerCard('Aisha', 21, 160);
cardlist += generatePlayerCard('Jennie', 16, 90);
cardlist += generatePlayerCard('Kenny', 23, 167);
cardlist += generatePlayerCard('Dibs', 27, 179);
cardlist += generatePlayerCard('Kobe', 29, 190);
cardlist += generatePlayerCard('E:U', 21, 166);

// append those cards to the div
cardDiv.innerHTML = cardlist;
//cardDiv.appendChild(cardlist);


// put the div into the DOM just before the wrapper element
mydiv.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteButton(event)
{
    console.log("Delete card TODO!!!");
    const Buttonthatgotclicked = event.currentTarget;
    //goes up one and deletes parents elements.
    Buttonthatgotclicked.parentElement.remove();
    //goes through all untill finds the match 
    //Buttonthatgotclicked.closest('.playerCard').remove();
}
//loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteButton));
