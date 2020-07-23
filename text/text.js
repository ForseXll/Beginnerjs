const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const inputs = document.querySelectorAll('[name="filter"]');

const russian = {
    'A': 'А',
    'a': 'a',
    'B': 'Б',
    'b': 'б',
    'V': 'В',
    'v': 'в',
    'G': 'Г',
    'g': 'г',
    'D': 'Д',
    'd': 'д',
    'Ye': 'Е',
    'ye': 'e',
    'Yo': 'Ё',
    'yo': 'ё',
    'Zh': 'Ж',
    'zh': 'ж',
    'Z': 'З',
    'z': 'з',
    'Ee': 'И',
    'ee': 'и',
    'Iy': 'Й',
    'iy': 'й',
    'K': 'К',
    'k': 'к',
    'L': 'Л',
    'l': 'л',
    'M': 'М',
    'm': 'м',
    'N': 'Н',
    'n': 'н',
    'O': 'О',
    'o': 'о',
    'P': 'П',
    'p': 'п',
    'R': 'Р',
    'r': 'р',
    'S': 'С',
    's': 'c',
    'T': 'Т',
    't': 'т',
    'U': 'У',
    'u': 'у',
    'F': 'Ф',
    'f': 'ф',
    'H': 'Х',
    'h': 'х',
    'Ts': 'Ц',
    'ts': 'ц',
    'Ch': 'Ч',
    'ch': 'ч',
    'Sh': 'Ш',
    'sh': 'ш',
    'Sch': 'Щ',
    'Sch': 'щ',
    'I': 'Ы',
    'i': 'ы',
    'E': 'Э',
    'e': 'э',
    'Yu': 'Ю',
    'yu': 'ю',
    'Ya': 'Я',
    'ya': 'я',
    ' ': ' ',
}

//object with functions to tranfsform text
const filters = {
    random: function (letter)
    {
        //random between 0-99
        let value = Math.floor(Math.random() * 10);
        //console.log(value);
        //odd will upper case
        if (value % 2 == 0)
        {
            return letter.toUpperCase();
        } else
        {
            return letter.toLowerCase();
        }
    },

    russian: function (letter)
    {
        //if there is a letter
        const trans = russian[letter];
        if (trans)
            return russian[letter];
        //if there is none return original
        return letter;
    },

    slow: function (letter)
    {
        let random = Math.floor(Math.random() * 2);
        //if letter is space add dots
        //console.log(random);
        if (letter == ' ' & (random % 2 == 0))
        {
            return '...';
        }
        return letter;
    },
}

//function that transforms text
function transformtext(text)
{
    const type = document.querySelector('[name="filter"]:checked').value;
    //console.log(type);
    //take text and loop over every char
    const modded = Array.from(text).map(filters[type]);
    result.textContent = modded.join('');
}


//grabbing event of what is being put in
textarea.addEventListener('input', event => transformtext(event.target.value));

//update the output every time you change
inputs.forEach(input => input.addEventListener('input', () => { transformtext(textarea.value) }));