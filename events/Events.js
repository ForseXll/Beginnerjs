//first way of doing a function
const what = document.querySelector('.what');
function handleClick()
{
    console.log('I have been clicked');
}
what.addEventListener('click', handleClick);
//second way of doing the function
const what2 = document.querySelector('.what2');
what2.addEventListener('click', function click()
{
    console.log('This was clicked too');
});

//multiple Items
const buyButton = document.querySelectorAll('.buy');
//console.log(buyButton);

//event contains a lot of info about the object
function toggleBuy(event)
{
    //console.log(event);

    //one way of doing it
    const button = event.target;
    console.log(button.textContent);//tells me what content I am click on
    console.log(parseFloat(event.target.dataset.price)); //tells me the attribute of data-price
    //the word 'this' is the same is event.currentTarget
    console.log(this);

    //of console.log(parseFloat(event.target.dataset.price)); //with out ascribing a variable

    //when having nested inside the button tag event.target vs event.current target
    // console.log(event.target);
    // console.log(event.currentTarget); //target you click on in my case it was <strong> tag not button
    // console.log(event.target === event.currentTarget);

    //stop the bubbling effect
    event.stopPropagation();

}
buyButton.forEach(function (button) { button.addEventListener('click', toggleBuy) });

//capture example rarely used I believe
window.addEventListener('click', function (event)
{ console.log("Clicked Window"); }, { capture: true });

