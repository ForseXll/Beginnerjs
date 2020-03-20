console.log('it works');

const paragraph = document.createElement('p');
paragraph.textContent = 'I am a Paragraph';
paragraph.classList.add('myspecial');

console.log(paragraph);

const image = document.createElement('img');
image.src = "https://picsum.photos/200";
image.alt = "Nice Photo";

console.log(image);

const mydiv = document.createElement('div');
mydiv.classList.add('wrapper');

console.log(mydiv);

//correct way of doing because it loads it
mydiv.appendChild(paragraph);
mydiv.appendChild(image);
document.body.appendChild(mydiv);

//incorrect way because it will load 3 times...
// document.body.appendChild(mydiv);
// mydiv.appendChild(paragraph);
// mydiv.appendChild(image);

const mylist = document.createElement('ul');
const mylist1 = document.createElement('li');
const mylist2 = document.createElement('li');
const mylist3 = document.createElement('li');
const mylist4 = document.createElement('li');
const mylist5 = document.createElement('li');
mylist1.textContent = 'One';
mylist2.textContent = 'Two';
mylist3.textContent = 'Three';
mylist4.textContent = 'Four';
mylist5.textContent = 'Five';

//console.log(mylist2);

mydiv.appendChild(mylist);
mylist.appendChild(mylist1);
mylist.appendChild(mylist2);
mylist.appendChild(mylist3);
mylist.appendChild(mylist4);
mylist.appendChild(mylist5);


