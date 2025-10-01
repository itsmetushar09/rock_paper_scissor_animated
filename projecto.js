let scene;
let playerObject = null;
let computerObject = null;
let animationInProgress = false;
let scores = { player: 0, computer: 0, draw: 0 };


// These should match your DOM and Three.js setup
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const drawScoreElement = document.getElementById('draw-score');
const resultText = document.getElementById('result-text');
const subText = document.getElementById('sub-text');
const choiceButtons = document.querySelectorAll('.choice-button');
const resetButton = document.getElementById('reset-button');
const playerChoiceIcon = document.getElementById('player-choice-icon');
const computerChoiceIcon = document.getElementById('computer-choice-icon');

const choices = ['rock', 'paper', 'scissors'];
const choiceIcons = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

function display3DObject(choice, isPlayer) {
    // Remove previous object
    if (isPlayer && playerObject) {
        scene.remove(playerObject);
        playerObject = null;
    } else if (!isPlayer && computerObject) {
        scene.remove(computerObject);
        computerObject = null;
    }

    let object;

    switch (choice) {
        case 'rock':
            object = createRockObject();
            break;
        case 'paper':
            object = createPaperObject();
            break;
        case 'scissors':
            object = createScissorsObject();
            break;
        default:
            return;
    }

    if (isPlayer) {
        object.position.set(-2, 0, 0);
        playerObject = object;
    } else {
        object.position.set(2, 0, 0);
        computerObject = object;
    }

    scene.add(object);

    // Animate the object appearing
    object.scale.set(0, 0, 0);
    animateObjectAppearing(object);
}
