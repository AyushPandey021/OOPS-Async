class Player {
  constructor(songs) {
    this.songs = songs;
    this.index = 0;
    this.audio = document.getElementById("audio");
    this.title = document.getElementById("title");
    this.artist = document.getElementById("artist");
    this.cover = document.getElementById("cover");
    this.play = document.getElementById("play");
    this.prev = document.getElementById("prev");
    this.next = document.getElementById("next");
    this.addEventListeners();
    this.loadSong();
  }
  loadSong() {
    const song = this.songs[this.index];
    this.audio.src = song.src;
    this.title.textContent = song.title;
    this.artist.textContent = song.artist;
    this.cover.src = song.cover;
  }
  playSong() {
    this.audio.play();
    this.play.textContent = "⏸️";
  }
  pauseSong() {
    this.audio.pause();
    this.play.textContent = "▶️";
  }
  togglePlayPause() {
    if (this.audio.paused) this.playSong();
    else this.pauseSong();
  }
  nextSong() {
    this.index = (this.index + 1) % this.songs.length;
    this.loadSong()
    this.playSong();
  }
  prevsong() {
    this.index = (this.index - 1 + this.songs.length) % this.songs.length;
    this.loadSong();
    this.playSong();
  }
  addEventListeners() {
    this.play.addEventListener("click", () => this.togglePlayPause());
    this.next.addEventListener("click", () => this.nextSong());
    this.prev.addEventListener("click", () => this.prevsong());
  }
}

const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    src: "assets/music/2.mp3",
    cover: "assets/image/1.jpg",
  },
  {
    title: "Song One",
    artist: "Artist A",
    src: "assets/music/3.mp3",
    cover: "assets/image/2.jpg",
  },
  {
    title: "Song One",
    artist: "Artist A",
    src: "assets/music/4.mp3",
    cover: "assets/image/3.jpg",
  },
];
const music = new Player(songs);
