import { handleEvent } from './handler.js';
import { colorByLength, isDark } from './colors.js';
const colorsElement = document.querySelector('.colors');
// console.log(colorsElement);
//get function to pull window.spechrecognition
function start()
{
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!('SpeechRecognition' in window))
    {
        //if doesn't work;
        console.log(`Sorry your browser doesn't support Speech Recognition`);
        return;
    }
    //if it exist then start the process
    console.log('Starting speech Recognition...');
    const recognized = new SpeechRecognition();
    recognized.continuous = true;
    recognized.interimResults = true;
    recognized.onresult = handleEvent;
    recognized.start();
    // console.log(recognized);
}
function displayColors(colors)
{
    //console.log(colors);
    return colors
        .map(
            color =>
            {
                //console.log(color); 
                return `<span class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background: ${color};">${color}</span>`;
            }).join('');
}

start();

colorsElement.innerHTML = displayColors(colorByLength);

//get function to pull window.speechrecognition

//check function if it is speech in window

//in function 
//recognition.continious = true;
//recognition.internResults = true;

//make new exprot for handlers 
//log word function in handlers   and log event.result
//lowere case everything
//strip any spaces  color.replce(/\s/, '');
//check if it is valid color
//work with UI 
//change backgroun color

//make colors work by displaying it as a span make funtion in colors.js
//if valid color !!color[word]


 //make display function that will diplay function of diffrent colors.
 //`<span class="color" ${}  style= background ${color} 