const Songs = [
  {
    title: "Life in Rio",
    artist: "Crazy Mano, NUEKI, and Slowboi",
    image: "Songs/Life in Rio.jpeg",
    path: "Songs/Life in Rio.mp3",
  },
  {
    title: "Moondeity X Interworld",
    artist: "Ivan Belozerov",
    image: "Songs/Moondeity X Interworld.jpeg",
    path: "Songs/Moondeity X Interworld.mp3",
  },
  {
    title: "GigaChad Theme",
    artist: "g3ox_em",
    image: "Songs/GigaChad.jpg",
    path: "Songs/GigaChad.mp3",
  },
  {
    title: "GHOST!",
    artist: "KIIXSHI",
    image: "Songs/GHOST.jpg",
    path: "Songs/GHOST.mp3",
  },
];

let curSong = 0;

let progress = document.getElementById("progress");
let ctrlIcon = document.getElementById("ctrlIcon");

let song = document.getElementById("song");
let image = document.getElementById("image");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let forwardBtn = document.getElementById("playNext");
let backwardBtn = document.getElementById("playPrevious");
let play = document.getElementById("play");

function loadSongs(songs) {
  title.innerText = songs.title;
  artist.innerText = songs.artist;
  song.src = songs.path;
  image.src = songs.image;
}

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

song.onended=()=>{
  playNextSong();
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

function playNextSong() {
  curSong = (curSong + 1) % Songs.length;
  loadSongs(Songs[curSong]);
  song.play();
}

function playPreviousSong() {
  curSong = (curSong - 1) % Songs.length;
  loadSongs(Songs[curSong]);
  song.play();
}

loadSongs(Songs[curSong]);

play.addEventListener("click", playPause);
forwardBtn.addEventListener("click", playNextSong);
backwardBtn.addEventListener("click", playPreviousSong);
