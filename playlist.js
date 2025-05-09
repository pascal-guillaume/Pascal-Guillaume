const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

// Liste directe des chansons pour éviter les problèmes avec GitHub Pages
const songs = [
    "Hercule le poisson rouge",
    "Histoire d'une ile",
    "Le coucou sur la branche",
    "Le loup triste et pas beau",
    "Le vitrier",
    "Les bébés oiseaux",
    "Les ciel c'est tout bleu",
    "Les crapauds",
    "Les pieds désacordés",
    "Marie ange l'orange et Léon le citron",
    "Miaou ouaf Pic"
];

// Créer la liste de lecture
function createPlaylist() {
    songs.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.className = 'playlist-item';
        songElement.textContent = song;
        songElement.onclick = () => playSong(`chut-on-ecoute/${song}.mp3`, songElement);
        playlist.appendChild(songElement);
    });
}

function playSong(src, element) {
    audioPlayer.src = src;
    audioPlayer.play();
    updateActiveState(element);
}

function updateActiveState(element) {
    // Retirer la classe active de tous les éléments
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.classList.remove('active');
    });
    // Ajouter la classe active à l'élément en cours
    element.classList.add('active');
}

// Ajouter un écouteur pour mettre à jour l'état quand la chanson se termine
audioPlayer.addEventListener('ended', () => {
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.classList.remove('active');
    });
});

// Initialiser la playlist au chargement
createPlaylist();
