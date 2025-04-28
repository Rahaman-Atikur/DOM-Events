function maleYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function maleRed() {
    document.body.style.backgroundColor = 'red';
}
const btnMakeBlue = document.getElementById('btn-click-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.background = 'blue';
}

const buttonMakePurple = document.getElementById('btn-make-purple');
buttonMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

document.getElementById('btn-click-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
});

document.getElementById('btn-click-gold').addEventListener('click', function makeGold() {
    document.body.style.backgroundColor = 'goldenrod';
})

