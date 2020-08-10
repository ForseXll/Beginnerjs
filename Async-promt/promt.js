function wait(ms = 0)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroy(popup)
{
    popup.classList.remove('open');
    await wait(1000);
    popup.remove();
    popup = null;
}




// ask function with option
function ask(options)
{
    //inside retrun a new Promise with only resolve
    return new Promise(async function (resolve)
    {
        //1st creat a popup with all the fields
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML('afterbegin', `
        <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"></input>
        <button type="submit">Submit</button>
        </fieldset>`);
        console.log(popup);

        //check if they want to cancel
        //if option.cancel then create button with type=button and textcontent= cancel
        if (options.cancel)
        {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = "Cancel";
            popup.firstElementChild.appendChild(skipButton);
            //listen for click on the cancel button
            skipButton.addEventListener('click', function ()
            {
                resolve(null);
                destroy(popup);
            }, { once: true });
        }
        //listen for submitted event

        //popup listen for submit then function() event.prevent default()
        popup.addEventListener('submit', function (event)
        {
            event.preventDefault();
            console.log('Form Submitted');
            resolve(event.target.input.value);
            destroy(popup);
        }, { once: true });
        //when someone submited , resolve data that was in the input bos

        //insert the popup into the DOM using append child
        document.body.appendChild(popup);
        //put a timeout before adding open class
        // setTimeout(function ()
        // {

        //     popup.classList.add('open');
        // }, 50)
        await wait(50);
        popup.classList.add('open');

    });
}

async function handleClick(event)
{
    console.log(event);
    const element = event.currentTarget;
    const cancel = element.hasAttribute('data-cancel');
    const answer = await ask({ title: element.dataset.question, cancel });
    console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', handleClick));

const questions = [
    { title: 'what is your name' },
    { title: 'what is your age', cancel: true },
    { title: `what's your girls name` },
];

async function askQuestions(array, callback)
{
    const results = [];
    //loop over the array
    for (const item of array)
    {
        const result = await callback(item);
        results.push(result);
    }
    return results;
}

async function go()
{
    const answers = await askQuestions(questions, ask);
    console.log(answers);
}

go();