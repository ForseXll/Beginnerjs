const myslider = Slider(document.querySelector('.slider'));
const dogslider = Slider(document.querySelector('.dog-slider'));

function Slider(sliderelement)
{
    if (!(sliderelement instanceof Element))
    {
        throw new Error('No slider was passed in');
    }
    //create variables for slider
    let current;
    let prev;
    let next;
    //console.log(sliderelement);
    //select element of needed for the slider
    const slides = sliderelement.querySelector('.slides');
    const prevButton = sliderelement.querySelector('.goToPrev');
    const nextButton = sliderelement.querySelector('.goToNext');

    //slider function
    function startSlider()
    {
        //console.log(sliderelement);
        //select current elemment by css thingy
        current = sliderelement.querySelector('.current') || slides.firstElementChild;
        //if none then start from first with or statement
        //console.log(current);
        //select prev
        prev = current.previousElementSibling || slides.lastElementChild;
        //console.log(prev);
        //select next
        next = current.nextElementSibling || slides.firstElementChild;
        //console.log({ prev, current, next });

    }
    startSlider();
    //applying classses to it
    function applyclasses()
    {
        //classList.add current next and prev
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }
    applyclasses();

    //function that moves the classes
    function move(direction)
    {
        //first remove all classes from current creat object with prev current and next 
        const removingclasses = ['prev', 'current', 'next'];
        prev.classList.remove(...removingclasses);
        current.classList.remove(...removingclasses);
        next.classList.remove(...removingclasses);


        //get direction of movement if direction is back
        //if direction === 'back'
        if (direction === 'back')
        {
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        }
        else
        {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }
        //use destructuring to and logic to reassign the classes
        //input last siblingchild
        applyclasses();
    }

    //work with keys
    function handlekey(event)
    {
        if (event.key === 'ArrowLeft')
        {
            move('back');
        }
        if (event.key === 'ArrowRight')
        {
            move('right');
        }

    }

    //event listener for clicks and pass to move function
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
    window.addEventListener('keyup', handlekey);

}

//create  a slider that works with keys 