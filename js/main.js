const musics = {};

main();

function main() {
    addMusics();
    showButtonsForAllMusic();
}

function addMusics() {
    musics.dejaVuMusic = new Music("Deja vu", "Tsuko G", "pop", "./musics/dejavu.mp3");
    musics.astronomiaMusic = new Music("Astronomia", "Vicetone", "pop", "./musics/meme-do-caixao.mp3");
    musics.beethovenMusic = new Music("Piano trap beethoven", "Beethoven", "classical", "./musics/Piano-Trap-Beethoven.mp3");
    musics.hallelujahVuMusic = new Music("hallelujah", "Pentatonix", "pop", "./musics/hallelujah.mp3");
    musics.toBeContinueVuMusic = new Music("To be continue", "To be continue", "pop", "./musics/to-be-continue.mp3");
    musics.toBeContinueVuMusic = new Music("To be continue", "To be continue", "pop", "./musics/to-be-continue.mp3");
    musics.fadeMusic = new Music("Fade", "Alan walker", "pop", "./musics/fade.mp3");

}


function showButtonsForAllMusic() {
    for (const music in musics) {
        const btn = document.createElement("button");
        btn.textContent = musics[music].title;
        btn.addEventListener("click", () => {
            musics[music].audio.play();
        });
        const body = document.querySelector("body");
        body.appendChild(btn);
    }



    /* musics.songs.forEach(music => {
        const btn = document.createElement("button");
        btn.innerHTML = music.title;
        btn.addEventListener("click", () => {
            music.audio.play();
        });
        const body = document.querySelector("body");
        body.appendChild(btn);
    }); */
}