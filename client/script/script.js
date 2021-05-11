const audioPlayer = document.getElementById("audioPlayer");
const score = document.getElementsByClassName("score");

console.log(audioPlayer);

let isPlaying = false;

let key = document.getElementsByClassName("key");

console.log(key[0].style.opacity);

document.body.addEventListener("keyup", function (e) {
  if (e.keyCode == 32) {
    key[0].style.opacity = ".001";
    score[0].style.opacity = ".999";
    e.preventDefault();
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
});
