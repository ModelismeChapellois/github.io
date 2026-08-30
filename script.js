/* --- MENU BURGER --- */
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
}

/* --- GALERIE DYNAMIQUE --- */
/*
    Dossiers à parcourir :
    images/pistes/buggy
    images/pistes/crawler
    images/pistes/drone
    images/pistes/indoor
    images/pistes/modele
*/

const folders = [
    "buggy",
    "crawler",
    "drone",
    "indoor",
    "modele"
];

// Nombre maximum d’images à tester par dossier
const maxImages = 200; // tu peux augmenter si tu veux

function loadGallery() {
    const gallery = document.getElementById("gallery");
    if (!gallery) return; // si on n'est pas sur galerie.html → on ne fait rien

    folders.forEach(folder => {
        for (let i = 1; i <= maxImages; i++) {

            // Chemin complet vers les images
            const img = new Image();
            img.src = `../images/pistes/${folder}/${folder}${i}.jpg`;
            img.className = "gallery-photo";

            // Si l'image existe → on l'ajoute
            img.onload = () => gallery.appendChild(img);
        }
    });
}

// On lance la galerie
loadGallery();
