let count = 0;//סופר את מספר הצעדים
let playerX = [];//מיקומי הצעדים של שחקן X
let playerO = [];// מיקומי הצעדים של שחקן O
let index;//המיקום של הכרטיס הנלחץ
const cards = document.querySelectorAll('.card');//מביא את כל הכרטיסים
let track = Array.from(cards);
const options = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
const winner = document.querySelector('.winner');
const restart = document.querySelector('.restart');
restart.addEventListener('click', () => {
    count = 0;
    playerO = [];
    playerX = [];
    window.location.reload();
})


cards.forEach(c => c.addEventListener('click', (e) => {
    index = track.indexOf(e.target);
    if (checkTurn(count)) {
        if (!cards[index].classList.value.includes('playerX') && !cards[index].classList.value.includes('playerO')) {
            cards[index].classList.add('playerX');
            playerX.push(index);
            count++;
        }
    }
    else {
        if (!cards[index].classList.value.includes('playerX') && !cards[index].classList.value.includes('playerO')) {
            cards[index].classList.add('playerO');
            playerO.push(index);
            count++;
        }
    }
    if (count > 4) {
        checkWin();
    }
}));

function checkTurn(count) {
    if (count % 2 === 0)
        return true;
    return false;
}
function checkWin() {
    if (options.find(o => checkPos(o, playerX))) {
        restart.classList.remove('hidden');
        winner.innerHTML += 'playerX';
        cards.forEach(c => c.classList.add('over'));
    }  
    else {
        if (options.find(o => checkPos(o, playerO))){
            winner.innerHTML += 'playerO';
            restart.classList.remove('hidden');
            cards.forEach(c => c.classList.add('over'));
    }}
    
    return;
}

function checkPos(positions, steps) {
    if ((steps.indexOf(positions[0]) !== -1 & steps.indexOf(positions[1]) !== -1 & steps.indexOf(positions[2]) !== -1)==1)
        return true
    return false;
}