const shopping = document.querySelector('.shopping');
const list = document.querySelector('.list');


//array to hold items  array fo state that hold everything not just names.
let items = [];

//submit function
function submitList(event)
{
    event.preventDefault(); //so pages doesn't reset
    console.log("Submitted");
    const name = event.currentTarget.item.value;
    if (!name) return; //empty submit
    //console.log(name);
    //creating object with item details what you will store
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    }
    items.push(item); //push items unto items object
    //console.log(item);
    event.currentTarget.reset(); //clear all inputs


    //fire off custom event for update
    list.dispatchEvent(new CustomEvent('itemsUpdated'));

}

//display function
//set list to innerHTML so it will print
//add input with checkbox
//add span with class itemName $item.name
//add button with &times
function displayList()
{
    //console.log(items);

    const html = items.map(input =>
        `<li className="shopping-item">
        <input type="checkbox" ${input.complete ? 'checked' : ''} value="${input.id}" >
        <span class="itemName">${input.name}</span> 
        <button value="${input.id}" ${input.name}>&times;</button>
        </li>
        `).join('');

    list.innerHTML = html;

}

//function for storage
//setItem in localstorage :: getItem from storage
//use JSON.stringify to convert to string and parse to convert back
function storageItemstoLocal()
{
    console.log('saving items to storage');
    localStorage.setItem('item', JSON.stringify(items)); //setItem in localstorage 

}

//function restore
function restorefromStorage()
{
    console.log('pulling from storage');
    const pulleditems = JSON.parse(localStorage.getItem('item'));//getting items in string form back from storage
    console.log(pulleditems);
    if (pulleditems.length) //if just loaded 
    {
        items.push(...pulleditems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }

}


//delete function
function deleteItem(id)
{
    console.log("item deleted", id);
    items = items.filter(input => input.id !== id);
    console.log(items);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));

}

//mark as complete function
//use event delegation input[type="checkbox"]
//add to html value to input value="item.id"
//play around with id in delegation
//find item in items using find( input => input.id == id)
//ref item to false
//add checked attribute with if statement in input

function checkedItem(id)
{
    console.log('item is checked', id);
    const checkeditem = items.find(input => input.id === id);
    console.log(checkeditem);
    checkeditem.complete = !checkeditem.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}



//event listener to work with submit
shopping.addEventListener('submit', submitList);
//event for our customs
list.addEventListener('itemsUpdated', displayList);
list.addEventListener('itemsUpdated', storageItemstoLocal);
//event delegation
list.addEventListener('click', function (event)
{
    if (event.target.matches('button'))
    {
        deleteItem(parseInt(event.target.value));
    }
    if (event.target.matches('input[type="checkbox"]'))
    {
        checkedItem(parseInt(event.target.value));
    }
});

restorefromStorage();