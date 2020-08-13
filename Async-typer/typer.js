function wait(ms = 0)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

//create random number gen
function randomNumber(min = 20, max = 150, randomAmount = Math.random())
{
    return Math.floor(randomAmount * (max - min) + min);
}

async function draw(element)
{
    // console.log(element.textContent);
    const text = element.textContent;
    let temp = '';
    for (const letter of text)
    {
        // console.log(letter);
        temp += letter;
        // console.log(temp);
        element.textContent = temp;
        const { typeMin, typeMax } = element.dataset;
        const randomWait = randomNumber(typeMin, typeMax);
        await wait(randomWait);
    }

}


// //recursion
// function draw(element)
// {
//     let index = 1;
//     const text = element.textContent;
//     const { typeMin, typeMax } = element.dataset;
//     async function drawAgain()
//     {
//         element.textContent = text.slice(0, index);
//         index++;
//         const randomWait = randomNumber(typeMin, typeMax);
//         await wait(randomWait);
//         if (index <= text.length)
//         {
//             drawAgain();
//         }
//     }
//     drawAgain();
// }


//using a while loop
// async function draw(element)
// {
//     let index = 1;
//     const text = element.textContent;
//     const { typeMin, typeMax } = element.dataset;
//     // const letter = text.slice(0, index);
//     while (index <= text.length)
//     {
//         // temp = text.slice(0, index);
//         element.textContent = text.slice(0, index);
//         index++;
//         // console.log(index);
//         // console.log(temp);
//         const randomWait = randomNumber(typeMin, typeMax);
//         await wait(randomWait);
//     }

// }


//grab elements data-type
//loop through each
document.querySelectorAll('[data-type]').forEach(draw);