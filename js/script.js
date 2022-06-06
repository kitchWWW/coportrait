var testing = null // this is the index, so one less than what you wana test


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var instructions = [
  '1. For this first photo, just snap a pic as you are',
  '2. Lets smile for this one',
  '3. Try to just take up the left side of the screen',
  '4. hold your hand up to the camera',
  '5. put some part of your body up close to the camera',
  '6. Kiss the camera',
  '7. Put your torso in frame, cutting your head out of the picture',
  '8. something important to you',
  '9. do something random',
  '10. lastly, a photo of yourself the way you want to be seen',
]

var collageNames = [
  'welcome',
  'smile more',
  'partnered',
  'please hold',
  '[close]',
  '[kiss]',
  '[torso]',
  '[important]',
  '[random]',
  'you. thank you.',
]

// Put variables in global scope to make them available to the browser console.
const video = document.querySelector('video');
const cans = [];

const description = document.getElementById("description");
const downloadStuff = document.getElementById("downloadStuff");
downloadStuff.style.display = "none"

// window.canvas = 
for (var i = 0; i < 10; i++) {
  var canvas = document.getElementById("can" + (i + 1))
  canvas.width = 480;
  canvas.height = 360;
  cans.push(canvas)
}

function hideAllCanvases() {
  for (var i = 0; i < 10; i++) {
    cans[i].style.display = "none"
  }
}

hideAllCanvases()

function w(percent) {
  return percent * canvas.width
}

function h(percent) {
  return percent * canvas.height
}


var currentPhotoIndex = 0
description.innerHTML = instructions[currentPhotoIndex]
const takepicture = document.getElementById('takepicture');
const nextpicture = document.getElementById('nextpicture');
nextpicture.style.display = "none"

// takepicture.onclick = function() {
//   drawImage()
//   currentPhotoIndex += 1
//   if (currentPhotoIndex == instructions.length) {
//     switchFromSnappingToViewing()
//     return
//   }
//   description.innerHTML = instructions[currentPhotoIndex]
// };

takepicture.onclick = function() {
  if (testing != null) {
    doTest()
    return
  }
  drawImage()
  currentPhotoIndex += 1
  description.innerHTML = instructions[currentPhotoIndex]
  if (currentPhotoIndex == instructions.length) {
    switchFromSnappingToViewing()
  }
};
nextpicture.onclick = function() {
  currentPhotoIndex += 1
  displayCurrentCanvas();
  if (currentPhotoIndex == instructions.length - 1) {
    nextpicture.style.display = "none"
    downloadStuff.style.display = "block"
  }
};

function switchFromSnappingToViewing() {
  video.style.display = "none"
  takepicture.style.display = "none"
  nextpicture.style.display = "block"
  currentPhotoIndex = 0
  displayCurrentCanvas()
}

function displayCurrentCanvas() {
  description.innerHTML = "# " + (currentPhotoIndex + 1) + " / 10 - <i>" + collageNames[currentPhotoIndex] + "</i>"
  hideAllCanvases()
  cans[currentPhotoIndex].style.display = "block"
}

var canvas;
var ctx;

function drawImage() {
  // console.log(video)
  canvas = cans[currentPhotoIndex]
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx = canvas.getContext('2d')
  if (currentPhotoIndex == 0) {
    drawPhoto1()
  }
  if (currentPhotoIndex == 1) {
    drawPhoto2()
  }
  if (currentPhotoIndex == 2) {
    drawPhoto3()
  }
  if (currentPhotoIndex == 3) {
    drawPhoto4()
  }
  if (currentPhotoIndex == 4) {
    drawPhoto5()
  }
  if (currentPhotoIndex == 5) {
    drawPhoto6()
  }
  if (currentPhotoIndex == 6) {
    drawPhoto7()
  }
  if (currentPhotoIndex == 7) {
    drawPhoto8()
  }
  if (currentPhotoIndex == 8) {
    drawPhoto9()
  }
  if (currentPhotoIndex == 9) {
    drawPhoto10()
  }
}

function doDownload() {
  // do the actual downloading. idk how to do it.
  return false
}

const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);


function doTest() {
  console.log("hello?")
  currentPhotoIndex = testing

  canvas = cans[currentPhotoIndex]
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx = canvas.getContext('2d')

  eval("drawPhoto" + (testing + 1) + "()"); // TODO figure out how to exec js of testing index + 1

  displayCurrentCanvas()
}

if (testing != null) {
  takepicture.innerHTML = "test: " + (testing + 1)
  description.innerHTML = instructions[testing]
}






