var images = document.getElementsByTagName('img');

// liste de 28 images dont 14 unique = 2 x 14 images
// mélanger les images 
var px = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    .map(p => [p, Math.random()])
    .sort((a, b) => a[1] - b[1])
    .map(p => p[0]);

// boucle pour afficher les images 
for (let i = 0; i < images.length; i++) {
    images[i].src2 = 'img' + px[i] + '.png';
}

var etape = 1;
var px1, px2;

// 3 étapes
document.addEventListener('click', function (e) {
    switch (etape) {
        case 1: // 1 etape retourner l'image puis la memoriser
            if (e.target.tagName == 'IMG') {
                e.target.src = e.target.src2;
                px1 = e.target;
                etape = 2
            }
            break; // stop l'action 
        case 2: // 2 etape retourne l'image puis compare avec l'image memoriser
            if (e.target.tagName == 'IMG') {
                e.target.src = e.target.src2;
                px2 = e.target;
                etape = 3;
            }
            break; // stop l'action
        case 3: // 3 etape si image1 == image2 alors remplace par un span vide sinon retourne le dos de la carte
            if (px1.src2 == px2.src2) {
                px1.replaceWith(document.createElement('span'));
                px2.replaceWith(document.createElement('span'));

            } else {

                px1.src = px2.src = 'dos-carte.png';
            }
            etape = 1;
            break; 
    }
})