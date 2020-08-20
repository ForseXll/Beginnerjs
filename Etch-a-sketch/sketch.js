//selecting the elements from page to work with 
//selecting canvas
const canvas = document.querySelector('#etch-sketch');
const context = canvas.getContext('2d');
//shake button to clear
const push = document.querySelector('.button');
const line_length = 20;

//seting up canvas coordinates
const width = canvas.width;
const height = canvas.height;
//random spawn of coordinates
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineCap = "round";
context.lineJoin = "round"
context.strokeStyle = "blue";
context.lineWidth = 30;
context.beginPath();  //begins path
context.moveTo(x, y); //starting point of the line
context.lineTo(x, y); //end point of line
context.stroke();

function drawing({ key })
{
    //console.log(key);
    context.beginPath();
    context.moveTo(x, y);
    switch (key)
    {
        case 'ArrowUp':
            console.log("Up");
            y -= line_length;
            break;
        case 'ArrowRight':
            console.log("Right");
            x += line_length;
            break;
        case 'ArrowLeft':
            console.log("Left");
            x -= line_length;
            break;
        case 'ArrowDown':
            console.log("Down");
            y += line_length;
            break;
        default:
            break;
    }
    context.lineTo(x, y);
    context.stroke();
}

function handlekey(event)
{
    //only respond to arrows
    if (event.key.includes('Arrow'))
    {
        event.preventDefault(); //prevent move screen
        //console.log(event.key);
        drawing({ key: event.key });  //pass object with event and keyvalue
    }
}

function cleanup()
{
    canvas.classList.add('button');
    context.clearRect(0, 0, width, height)
    console.log(`Animation has started`);
    canvas.addEventListener('animationend',
        function ()
        {
            console.log("Animation has Ended");
            canvas.classList.remove('button');
        }, { once: true }
    );
    //reset at a different location
    x = Math.floor(Math.random() * height);
    y = Math.floor(Math.random() * width);
    // console.log(x, y);
    context.beginPath();
}

window.addEventListener('keydown', handlekey);
push.addEventListener('click', cleanup);