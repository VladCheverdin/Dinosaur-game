var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout( function() {
        dino.classList.remove('jump');
    }, 300);
}

var isAlive = setInterval ( function() { 
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game Over:(');
    }
}, 10);