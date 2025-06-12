function sleep(ms){return new Promise(resolve => setTimeout(resolve, ms));}
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
let boardState = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
let block = document.getElementById("text");

async function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (!boardState[index] && gameActive) {
        boardState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        await sleep(10);
        play();
}

async function play(){
    if (checkWin()) {
            gameActive = false;
            board.classList.add('winner');
            cells.forEach(cell => cell.classList.add('winner'));
            block.textContent = `Победил ${currentPlayer === 'X' ? 'Игрок :(' : 'Компьютер >:D'}`;
            await sleep(10);
            block.classList.add("result")
        } else if (isDraw()) {
            gameActive = false;
            block.textContent = "Ничья :/";
            await sleep(10);
            block.classList.add("result");
        } else {
            switchPlayer();
            SwitchToComputer();
        }
    }
}

async function computerPlay(){
    if (checkWin()) {
            gameActive = false;
            board.classList.add('winner');
            cells.forEach(cell => cell.classList.add('winner'));
            block.textContent = `Победил ${currentPlayer === 'X' ? 'Игрок :(' : 'Компьютер >:D'}`;
            await sleep(10);
            block.classList.add("result")
        } else if (isDraw()) {
            gameActive = false;
            block.textContent = "Ничья :/";
            await sleep(10);
            block.classList.add("result");
        } else {
            switchPlayer();
        }
    }

async function SwitchToComputer(){
    if (gameActive){
        if (FindWin()) {Win()}
        else if (FindLose()) {SaveLose()}
        else {
            let iindex = Math.floor(Math.random()*9);
            while (boardState[iindex]){iindex = Math.floor(Math.random()*9);}
            boardState[iindex] = currentPlayer;
            cells[iindex].textContent = currentPlayer;
            computerPlay();
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

async function Win() {
    for (let i = 0; i < 9; i++){
        if (!boardState[i]){
            boardState[i] = currentPlayer;
            if (checkWin()){
                cells[i].textContent = currentPlayer;
                computerPlay();
                break;
            }
            else {
                boardState[i] = null;
            }
        }
    }
}

function FindWin(){
    for (let i = 0; i < 9; i++){
        if (!boardState[i]){
            boardState[i] = currentPlayer;
            if (checkWin()){
                boardState[i] = null;
                return true;
            }
            else {
                boardState[i] = null;
            }
        }
    }
    return false;
}

function FindLose(){
    for (let i = 0; i < 9; i++){
        if (!boardState[i]){
            boardState[i] = 'X';
            if (checkWin()){
                boardState[i] = null;
                return true;
            }
            else {
                boardState[i] = null;
            }
        }
    }
    return false;
}
async function SaveLose(){
    for (let i = 0; i < 9; i++){
        if (!boardState[i]){
            boardState[i] = 'X';
            if (checkWin()){
                boardState[i] = currentPlayer
                cells[i].textContent = currentPlayer;
                computerPlay();
                break;
            }
            else {
                boardState[i] = null;
            }
        }
    }
    return false;
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    return !boardState.includes(null);
}

function resetGame() {
    boardState = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winner');
        board.classList.remove('winner');
    });
    block.classList.remove("result");
    block.textContent = "Try Again!";
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));