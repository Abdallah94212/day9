 // Scrolling horizontal avec la molette
document.getElementById('cards-list').addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY; // Scrolling horizontal avec la molette
});

// Gestion du zoom au clic
const cards = document.querySelectorAll('.card');
let zoomedInCard = null;

cards.forEach(card => {
    card.addEventListener('click', function() {
        // Récupère l'URL de l'image de la carte cliquée
        const imgSrc = card.querySelector('.card_image img').src; // Récupère l'URL de l'image
        console.log(imgSrc); // Affiche l'URL de l'image dans la console

        if (zoomedInCard !== card) {
            // Réinitialise toutes les cartes
            cards.forEach(c => {
                c.style.transform = 'scale(1)';
                c.style.zIndex = '1'; // Réinitialise le z-index
            });
            // Agrandir l'élément cliqué
            card.style.transform = 'scale(2)';
            card.style.zIndex = '10'; // Placer au premier plan
            zoomedInCard = card; // Mémorise la carte zoomée
        }
    });
});

// Réinitialiser le zoom lors de l'appui sur Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && zoomedInCard) {
        zoomedInCard.style.transform = 'scale(1)';
        zoomedInCard.style.zIndex = '1';
        zoomedInCard = null; // Réinitialise
    }
});

// Afficher l'image en appuyant sur une touche (par exemple, 'i')
document.addEventListener('keydown', function(event) {
    if (event.key === 'i') { // Changez la touche ici si nécessaire
        const currentCard = zoomedInCard; // Carte actuellement zoomée
        if (currentCard) {
            const imgSrc = currentCard.querySelector('.card_image img').src; // Récupère l'URL de l'image
            const displayedImage = document.getElementById('displayed-image');
            displayedImage.src = imgSrc; // Met à jour l'image affichée
            document.getElementById('image-display').style.display = 'flex'; // Affiche l'image
        }
    }
});

// Fermer l'image affichée en cliquant dessus
document.getElementById('image-display').addEventListener('click', function() {
    this.style.display = 'none'; // Cache l'image
});
// Liste des images et titres
const imagesData = [
    ['https://media.giphy.com/media/3oD3Yrwt1gRDhiQZ5S/giphy.gif', 'Who am I'],
    ['https://media.giphy.com/media/3oD3YiCUVULluiN9WU/giphy.gif', 'Happy sausage'],
    ['https://media.giphy.com/media/3oD3YLTOkztY9xfiQE/giphy.gif', 'Stripes'],
    ['https://media.giphy.com/media/l3UcCohhJm3KEhTWw/giphy.gif', 'Tornadoes'],
    ['https://media.giphy.com/media/3oD3YiL23DDll9bAWc/giphy.gif', 'Walking squares'],
    ['https://media.giphy.com/media/26ufjJgVk087WtjEI/giphy.gif', 'Cubes'],
    ['https://media.giphy.com/media/l3Ucp4ROadmpk7aVy/giphy.gif', 'Hairy'],
    ['https://media.giphy.com/media/3oD3YOacdm13voG59K/giphy.gif', 'The Beanstalk'],
    ['https://media.giphy.com/media/l3UcDs1plijcJfOzC/giphy.gif', 'Tiles'],
    ['https://media.giphy.com/media/3oD3YnBHaVfd0rSY1i/giphy.gif', 'In and Out'],
    ['https://media.giphy.com/media/26ACqq4q3I8UDF3IA/giphy.gif', 'Switching points']
];

// Générateur de cartes
function generateCards(cardsData) {
    const cardsElements = document.getElementById('cards-list');
    cardsData.forEach((cardData, index) => {
        cardsElements.innerHTML += `
            <div class="card ${index}">
                <div class="card_image"><img src="${cardData[0]}"/></div>
                <div class="card_title"><p>${cardData[1]}</p></div>
            </div>`;
    });
}

generateCards(imagesData);

// Scrolling horizontal avec la molette
document.getElementById('cards-list').addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY; // Scrolling horizontal avec la molette
});

// Gestion du zoom au clic
const cards = document.querySelectorAll('.card');
let zoomedInCard = null;

cards.forEach(card => {
    card.addEventListener('click', function() {
        const imgSrc = card.querySelector('.card_image img').src; // Récupère l'URL de l'image
        console.log(imgSrc); // Affiche l'URL de l'image dans la console

        if (zoomedInCard !== card) {
            // Réinitialise toutes les cartes
            cards.forEach(c => {
                c.style.transform = 'scale(1)';
                c.style.zIndex = '1'; // Réinitialise le z-index
            });
            // Agrandir l'élément cliqué
            card.style.transform = 'scale(2)';
            card.style.zIndex = '10'; // Placer au premier plan
            zoomedInCard = card; // Mémorise la carte zoomée
        }
    });
});

// Réinitialiser le zoom lors de l'appui sur Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && zoomedInCard) {
        zoomedInCard.style.transform = 'scale(1)';
        zoomedInCard.style.zIndex = '1';
        zoomedInCard = null; // Réinitialise
    }
});

// Afficher l'image en appuyant sur une touche (par exemple, 'i')
document.addEventListener('keydown', function(event) {
    if (event.key === 'i') { // Changez la touche ici si nécessaire
        const currentCard = zoomedInCard; // Carte actuellement zoomée
        if (currentCard) {
            const imgSrc = currentCard.querySelector('.card_image img').src; // Récupère l'URL de l'image
            const displayedImage = document.getElementById('displayed-image');
            displayedImage.src = imgSrc; // Met à jour l'image affichée
            document.getElementById('image-display').style.display = 'flex'; // Affiche l'image
        }
    }
});

// Fermer l'image affichée en cliquant dessus
document.getElementById('image-display').addEventListener('click', function() {
    this.style.display = 'none'; // Cache l'image
});
