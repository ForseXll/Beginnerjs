//innertext  is aware of test styling


// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

//classes
const picture = document.querySelector('.nice');
//const picture2 = document.querySelector('.custom');
picture.classList.add('open');
picture.classList.remove('open');

function toggleRound() {
    picture.classList.toggle('round');
    //picture2.classList.toggle('round');
}

picture.addEventListener('click', toggleRound);


picture.alt = 'Ying';       //single quotes #setter
console.log(picture.alt);   //   #getter 

