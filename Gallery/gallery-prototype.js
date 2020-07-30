function Gallery(gallery)
{
    if (!gallery)
    {
        return;
        //throw new Error("No gallery was found");
    }
    this.gallery = gallery;

    //select elements that we need
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prev = document.querySelector('.prev');
    this.next = document.querySelector('.next');


    //bind methods to instance for when we need them
    this.showNextImage = this.showNextImage.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.handlekeys = this.handlekeys.bind(this);
    this.handleclickoutside = this.handleclickoutside.bind(this);


    //loop through images and check for click event with handleimage
    this.images.forEach(input => input.addEventListener('click', (event) => this.showImage(event.currentTarget)));
    //event for modal click
    this.modal.addEventListener('click', this.handleclickoutside);
    //loop over every image
    this.images.forEach(input =>
    {
        //event for each image and check if that 
        input.addEventListener('keyup', event => { if (event.key === 'Enter') { this.showImage(event.currentTarget) } });
    });
}

Gallery.prototype.openModal = function ()
{
    console.info('opening modal');
    //check to see if modal is open
    if (this.modal.matches('.open'))
    {
        console.info('modal already open');
        return;
    }
    this.modal.classList.add('open');
    //put event listeners here to stop it from going on after modal is closed
    window.addEventListener('keyup', this.handlekeys);
    this.next.addEventListener('click', this.showNextImage);
    this.prev.addEventListener('click', this.showPrevImage);

}

Gallery.prototype.closeModal = function ()
{
    //console.log('closing modal');
    this.modal.classList.remove('open');
    //removing events to stop it from going on after modal is closed
    window.removeEventListener('keyup', this.handlekeys);
    this.next.removeEventListener('click', this.showNextImage);
    this.prev.removeEventListener('click', this.showPrevImage);
}

Gallery.prototype.handleclickoutside = function (event)
{
    if (event.target === event.currentTarget)
    {
        this.closeModal();
    }
}

Gallery.prototype.handlekeys = function (event)
{
    if (event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImage();
    if (event.key === 'ArrowLeft') return this.showPrevImage();
}

Gallery.prototype.showImage = function (element)
{
    if (!element)
    {
        console.info('no image was found');
        return;
    }
    console.log(element);
    //update the source of the image; the h2 title; the data of figure p
    this.modal.querySelector('img').src = element.src;
    this.modal.querySelector('h2').textContent = element.title;
    this.modal.querySelector('figure p').textContent = element.dataset.description;
    this.currentImage = element;
    this.openModal();


}
//show next imagefunction
Gallery.prototype.showNextImage = function ()
{
    //safeguard to go to first image when end of gallery
    this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}
Gallery.prototype.showPrevImage = function ()
{
    this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}


///////////////////////////////

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1,
    gallery2);


//clicking next prev is broken
//clicking outside is broken
//esc not working