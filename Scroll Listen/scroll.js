//using this scroll method becasue of overflow other wise window.eventlistener would work
const paragraph = document.querySelector('.accept-terms');
//paragraph.addEventListener('scroll', event => { console.log(event); });
//const searching = document.querySelector('.test');

const end = document.querySelector('.end');
const button = document.querySelector('button');

// console.log(paragraph);
// console.log(end);

function callback(stuff)
{
    //console.log(stuff[0]);
    if (stuff[0].isIntersecting === true)
    {
        //console.log(`got here`)
        button.disabled = false;
    }
    else
    {
        button.disabled = true;
    }
}

let options = {
    root: paragraph,
    threshold: 1,
}
const observer = new IntersectionObserver(callback, options);

observer.observe(end);

