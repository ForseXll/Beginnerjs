const p = document.createElement('p');
p.textContent = `This is the content!!`;
console.log(p);

p.remove();

console.log(p);
document.body.appendChild(p);