
function drawPhoto1() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(video, h(.2), w(.2), canvas.width, canvas.height);
  ctx.drawImage(video, h(.5), h(.5), canvas.width / 3, canvas.height / 2);
}