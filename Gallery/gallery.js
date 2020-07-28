function Gallery(gallery)
{
    if (!gallery)
    {
        return;
        //throw new Error("No gallery was found");
    }
    console.log(gallery);

    //select elements that we need
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentImage;

    function openModal()
    {
        console.info('opening modal');
        //check to see if modal is open
        if (modal.matches('.open'))
        {
            console.info('modal already open');
            return;
        }
        modal.classList.add('open');
        //put event listeners here to stop it from going on after modal is closed
        window.addEventListener('keyup', handlekeys);
        next.addEventListener('click', showNextImage);
        prev.addEventListener('click', showPrevImage);

    }

    function closeModal()
    {
        //console.log('closing modal');
        modal.classList.remove('open');
        //removing events to stop it from going on after modal is closed
        window.removeEventListener('keyup', handlekeys);
        next.removeEventListener('click', showNextImage);
        prev.removeEventListener('click', showPrevImage);
    }

    function handleclickoutside(event)
    {
        if (event.target === event.currentTarget)
        {
            closeModal();
        }
    }

    function handlekeys(event)
    {
        if (event.key === 'Escape') return closeModal();
        if (event.key === 'ArrowRight') return showNextImage();
        if (event.key === 'ArrowLeft') return showPrevImage();
    }

    function showImage(element)
    {
        if (!element)
        {
            console.info('no image was found');
            return;
        }
        console.log(element);
        //update the source of the image; the h2 title; the data of figure p
        modal.querySelector('img').src = element.src;
        modal.querySelector('h2').textContent = element.title;
        modal.querySelector('figure p').textContent = element.dataset.description;
        currentImage = element;
        openModal();


    }
    //show next imagefunction
    function showNextImage()
    {
        //safeguard to go to first image when end of gallery
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }
    function showPrevImage()
    {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    //loop through images and check for click event with handleimage
    images.forEach(input => input.addEventListener('click', (event) => showImage(event.currentTarget)));
    //event for modal click
    modal.addEventListener('click', handleclickoutside);
    //loop over every image
    images.forEach(input =>
    {
        //event for each image and check if that 
        input.addEventListener('keyup', event => { if (event.key === 'Enter') { showImage(event.currentTarget) } });
    });

}
//
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));