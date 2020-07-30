function Slider(sliderelement)
{
    if (!(sliderelement instanceof Element))
    {
        throw new Error('No slider was passed in');
    }
    this.sliderelement = sliderelement;

    //select element of needed for the slider
    this.slides = sliderelement.querySelector('.slides');

    //not need to chage to this since useing in scope
    const prevButton = sliderelement.querySelector('.goToPrev');
    const nextButton = sliderelement.querySelector('.goToNext');
    console.log(prevButton);

    this.startSlider();
    this.applyclasses();

    //event listener for clicks and pass to move function
    prevButton.addEventListener('click', () => this.move('left'));
    nextButton.addEventListener('click', () => this.move());
    //we can bind here because we are not removing event listener
    //nextButton.addEventListener('click', this.move.bind(this));
}

//slider function
Slider.prototype.startSlider = function ()
{
    //select current elemment by css thingy
    this.current = this.sliderelement.querySelector('.current') || this.slides.firstElementChild;
    //if none then start from first with or statement
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
    //console.log({ prev, current, next });
}

//applying classses to it
Slider.prototype.applyclasses = function ()
{
    //classList.add current next and prev
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}


//function that moves the classes
Slider.prototype.move = function (direction)
{
    //first remove all classes from current creat object with prev current and next 
    const removingclasses = ['prev', 'current', 'next'];
    this.prev.classList.remove(...removingclasses);
    this.current.classList.remove(...removingclasses);
    this.next.classList.remove(...removingclasses);


    //get direction of movement if direction is back
    //if direction === 'left'
    //use destructuring to and logic to reassign the classes
    if (direction === 'left')
    {
        [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    }
    else //if (direction === 'right')
    {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }
    this.applyclasses();
}
const myslider = new Slider(document.querySelector('.slider'));
const dogslider = new Slider(document.querySelector('.dog-slider'));

console.log(myslider, dogslider);

//create  a slider that works with keys 
//logic for selecting slider
window.dogslider = myslider;
window.addEventListener('keyup', function (event)
{
    if (event.key === 'ArrowRight')
    {
        myslider.move('right');
    }
    else if (event.key === 'ArrowLeft')
    {
        myslider.move('left');
    }
    else return;
});

window.myslider = dogslider;
window.addEventListener('keyup', function (event)
{
    if (event.key === 'ArrowUp')
    {
        dogslider.move('right');
    }
    else if (event.key === 'ArrowDown')
    {
        dogslider.move('left');
    }
    else return;
});
