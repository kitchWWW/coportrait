
function drawPhoto5() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  var img2 = new Image();
  img2.onload = function() {
    console.log("fewafw?")
    ctx.drawImage(img2, 0, 0);
    ctx.drawImage(video, h(.3), w(.3), canvas.width, canvas.height);
    var img1 = new Image();
    img1.onload = function() {
      console.log("wafeawf?")
      ctx.drawImage(img1, 0, 0);
    };
    var imageNum = getRandomInt(3000) + 1
    var imageID = (imageNum + "").padStart(5, '0');
    img1.src = './res/sketches/body/out_' + imageID + '-cropped.png';
  };
  img2.src = './res/test.png';

}