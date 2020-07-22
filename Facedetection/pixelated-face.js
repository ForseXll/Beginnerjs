const webcam = document.querySelector(['.webcam']);
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const facedetector = new window.FaceDetector();
const options = document.querySelectorAll('.controls input[type="range"]');

console.log(options);



//object to scale the image
const choice = {
    SIZE: 10,
    SCALE: 1.3,
}

function handleOptions(event)
{
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);
    const { value, name } = event.currentTarget;
    choice[name] = parseFloat(value);
}
console.log(handleOptions);
options.forEach(input => input.addEventListener('input', handleOptions));

//pulling stream from webcam and onto the browser
async function stream()  
{
    //creating a stream element
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 }
    });
    webcam.srcObject = stream;
    await webcam.play();
    //sizing of the image or canvas
    //console.log(webcam.videoWidth, webcam.videoHeight);
    //sizeing canvas to video hieght and width
    canvas.height = webcam.videoHeight;
    canvas.width = webcam.videoWidth;
    //sizeing facecanvas to video hieght and width
    faceCanvas.height = webcam.videoHeight;
    faceCanvas.width = webcam.videoWidth;
}

//detectin a face
async function detect()
{
    const faces = await facedetector.detect(webcam);

    //request animation in loop both functions
    faces.forEach(drawFace);
    faces.forEach(censor);
    requestAnimationFrame(detect);
}

function drawFace(face)
{
    //destructuring bounding box
    const { width, height, x, y } = face.boundingBox;
    //clearing up the blur before the draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
}



function censor(face)
{
    const facedetails = face.boundingBox;
    //console.log(facedetails);
    faceCtx.imageSmoothingEnabled = false;

    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    //draw the samll face
    faceCtx.drawImage(
        webcam, //source of input
        facedetails.x, //starting point x
        facedetails.y, //starting point y
        facedetails.width,  //width 
        facedetails.height,  //length
        //drawing into canvas
        facedetails.x, //drawing starting point
        facedetails.y, //drawing stating point
        choice.SIZE,
        choice.SIZE,
    );

    //value to manipulate the size when redrawing 
    const height = facedetails.height * 2.0;
    const width = facedetails.width * 2.0;

    // //then stretchfacedetails it out
    faceCtx.drawImage(
        faceCanvas,  //source
        facedetails.x, //starting point
        facedetails.y,
        choice.SIZE,   //size of little one
        choice.SIZE,   //size of little one
        //drwaing into canvas
        facedetails.x - (width - facedetails.width) / 2,
        facedetails.y - (height - facedetails.width) / 2,
        width,
        height,
    );

}


stream().then(detect);