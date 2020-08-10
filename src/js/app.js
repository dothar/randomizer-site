// Options
let defaultOptions = [
    'As I see it, yes',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'It is certain',
    'It is decidedly so',
    'Most likely',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Outlook good',
    'Reply hazy, try again',
    'Signs point to yes',
    'Very doubtful',
    'Without a doubt',
    'Yes',
    'Yes, definitely',
    'You may rely on it'
];

let options = defaultOptions;
let isDefault = true;

let newOptions = [];

const optionsInput = document.querySelector('.section--options input');
const optionsList = document.querySelector('.section--options .list');
optionsList.innerHTML = 'Default options'

// Set Default Option
function setDefaultOptions(button) {
    if (isDefault) {
        alert('Already set on default');

    } else {
        options = defaultOptions;
        isDefault = true;
        optionsList.innerHTML = 'Default options';
        button.style.backgroundColor = ''
    }
}

// Add Option
function addOption() {
    if (optionsInput.value == '') {
        alert('No option added');

    } else {
        newOptions.push(optionsInput.value);

        if (optionsList.innerHTML == 'Default options') {
            optionsList.innerHTML = optionsInput.value
        } else {
            optionsList.innerHTML = optionsList.innerHTML + ' - ' + optionsInput.value
        }

        options = newOptions;
        isDefault = false;

        // Clear Input
        optionsInput.value = '';
    }

}

// **************************************************************************************
// **************************************************************************************

// Submit Question
const modalAnswer = document.querySelector('.modal--answer');
const questionInput = document.querySelector('.section--question input');
console.log(questionInput.value);

function submitQuestion() {
    if (questionInput.value == '') {
        alert('No question asked');

    } else {
        const randomAnswer = options[Math.round(Math.random() * (options.length - 1))];

        modalAnswer.style.display = 'flex';
        modalAnswer.querySelector('.question').innerHTML = questionInput.value;
        modalAnswer.querySelector('.answer').innerHTML = randomAnswer;

        modalAnswer.querySelector('button').focus();

        addHistoryLog(questionInput.value, randomAnswer);

        // Clear Input
        questionInput.value = '';
    }

}

function hideAnswer() {
    modalAnswer.style.display = 'none';
    questionInput.focus();
}

// **************************************************************************************
// **************************************************************************************

// History
const historyList = document.querySelector('.section--history .list');

function addHistoryLog(question, answer) {
    const log = document.createElement('div');
    log.innerHTML = '<div class="question">' + question + '</div><div class="answer">' + answer + '</div>';
    log.classList.add('log');
    historyList.prepend(log);
}

function clearHistory() {
    if (historyList.innerHTML = '') {
        alert('no questions asked yet');

    } else {
        let logs = historyList.querySelectorAll('.log');
        logs.forEach(log => {
            log.remove();
        })
    }
}

// Click on Enter
function enter(e, f) {
    if ((window.event ? event.keyCode : e.which) == 13) {
        e.preventDefault();
        f();
    }
}

// Buttons

document.getElementById('submitQuestion').addEventListener('click', submitQuestion);
document.getElementById('addOption').addEventListener('click', addOption);
document.getElementById('setDefaultOptions').addEventListener('click', setDefaultOptions(this));
document.getElementById('clearHistory').addEventListener('click', clearHistory);

document.getElementById('hideAnswer').addEventListener('click', hideAnswer);
// ***********************************************************
// ***********************************************************