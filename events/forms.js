//Web Link
const ilya = document.querySelector('.ilya');

//clicking the link
ilya.addEventListener('click', function (event)
{
    console.log("Clicked the link")
    const shouldchange = confirm(
        'This website is not really safe, do you want to continue?'
    );
    if (!shouldchange)
    {
        //stop from executing what is asked.
        event.preventDefault();
    }
}
);

const signup = document.querySelector('[name="signup"]');

signup.addEventListener('submit', function (event)
{
    // console.log(event);
    // console.log(event.currentTarget.name.value);
    //either use required in html input name tab
    //or do extra validation
    const name = event.currentTarget.name.value;
    const agree = event.currentTarget.agree.checked;
    if (name.includes('Ying'))
    {
        alert("Wrong name");
    }
    else if (agree)
    {
        alert("Do you agree to the terms?");
    }

    event.preventDefault();
});


// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
//buttons usd to work with inside of application

//links to go somewhere else
const subbutton = document.querySelector('#submit');

function handleclick(event)
{
    console.log(event.type);
    console.log(event.key);
    if (event.type === 'click' || event.key === 'keyup')
    {
        console.log("You clicked a photo");
    }
}

subbutton.addEventListener('click', handleclick);
subbutton.addEventListener('keyup', handleclick);
