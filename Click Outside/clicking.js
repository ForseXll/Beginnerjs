const cardbutton = document.querySelectorAll('.card .button')

const innermodal = document.querySelector('.inner-modal');

const outermodal = document.querySelector('.outer-modal');

function clicked(event)
{
    const button = event.currentTarget;  //current target
    const card = button.closest('.card'); //closest climbs up tree of elemetns. query selctor goes down
    const image = card.querySelector('img').src;  //selecting card not document
    const description = card.dataset.description;
    const about = card.querySelector('h2').textContent;
    //console.log(button);
    // console.log(card);
    // console.log(image);
    // console.log(description);
    //creating modal
    innermodal.innerHTML = `    
            <img src="${image}" >
            <h2> ${description} </h2>
            <p> ${about} </p>
     
    `;

    outermodal.classList.add('open');
}

cardbutton.forEach(function clicking(button)
{
    button.addEventListener('click', clicked)
})

function modalclose()
{
    outermodal.classList.remove('open');
}

outermodal.addEventListener('click', function picclicking(event)
{
    const target = event.target.closest('.inner-modal');
    // console.log(event.target.closest('.inner-modal'));
    // console.log(event.currentTarget);
    if (!target)
    {
        modalclose();
    }
})