const bodyWrapper = document.createElement('div');
bodyWrapper.setAttribute('class', 'body-wrapper');
document.body.append(bodyWrapper);

// POP UP
// START GAME

const gameStart = document.createElement('div');
gameStart.setAttribute('class', 'pop-up game-start');
bodyWrapper.append(gameStart);

const gameTitle = document.createElement('h1');
gameTitle.setAttribute('class', 'game-start__title');
gameTitle.textContent = ('Gem Puzzle');
gameStart.append(gameTitle);

const btnStartGame = document.createElement('button');
btnStartGame.setAttribute('class', 'btn game-start__btn');
btnStartGame.textContent = ('Start');
gameStart.append(btnStartGame);

btnStartGame.addEventListener('click', () => {
    gameStart.classList.add('hidden');
});


// GAME 

// header 
// Burger menu  ------------------------------------------------------

const header = document.createElement('header');
header.setAttribute('class', 'header');
bodyWrapper.append(header);

const headerContainer = document.createElement('div');
headerContainer.setAttribute('class', 'container header__container header__menu menu');
header.append(headerContainer);

const menuIcon = document.createElement('div');
menuIcon.setAttribute('class', 'menu__icon');
headerContainer.append(menuIcon);

const menuIconLines = document.createElement('span');
menuIconLines.setAttribute('class', 'menu__icon_middle-line');
menuIcon.append(menuIconLines);

const menuBody = document.createElement('div');
menuBody.setAttribute('class', 'menu__body');
headerContainer.append(menuBody);

const menuList = document.createElement('div');
menuList.setAttribute('class', 'menu__list');
menuBody.append(menuList);

const btnNewGame = document.createElement('button');
btnNewGame.setAttribute('class', 'btn menu__body_btn btn__shuffle-start');
btnNewGame.textContent = ('New Game');
menuList.append(btnNewGame);

const btnStop = document.createElement('button');
btnStop.setAttribute('class', 'btn menu__body_btn btn__stop');
btnStop.textContent = ('Stop');
menuList.append(btnStop);

const btnSave = document.createElement('button');
btnSave.setAttribute('class', 'btn menu__body_btn btn__save');
btnSave.textContent = ('Save');
menuList.append(btnSave);

const btnScores = document.createElement('button');
btnScores.setAttribute('class', 'btn menu__body_btn btn__scores');
btnScores.textContent = ('Scores');
menuList.append(btnScores);

const shadow = document.createElement('div');
shadow.setAttribute('class', 'shadow');
bodyWrapper.append(shadow);

shadow.addEventListener("click", () => {
    menuBody.classList.remove('menu__body_active');
    shadow.classList.remove('shadow_active');
});


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('menu__body_active');  // click on same icon
    shadow.classList.toggle('shadow_active');
    document.body.classList.toggle('body-lock');
});

btnNewGame.addEventListener("click", () => {
    menuIcon.classList.remove('_active');
    menuBody.classList.remove('menu__body_active');
    shadow.classList.remove('shadow_active');
    // showTime();
});

// btnStop.addEventListener("click", () => {
//     menuBody.classList.remove('menu__body_active');
// });

btnSave.addEventListener("click", () => {
    menuBody.classList.remove('menu__body_active');
});

btnScores.addEventListener("click", () => {
    menuBody.classList.remove('menu__body_active');
});

// function onMenuLinkClick (e) {
//     menuList = e.target;

//     if (menuIcon.classList.contains('_active')) {
//         menuIcon.classList.remove('menu__icon_active');
//         menuBody.classList.remove('menu__body_active');  // click on same icon
//         shadow.classList.remove('shadow_active');
//         document.body.classList.remove('body-lock');
//     }
// };


// main  ------------------------------------------------------------

const main = document.createElement('main');
main.setAttribute('class', 'main');
bodyWrapper.append(main);

const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container main__container');
main.append(mainContainer);

const blockCounter = document.createElement('div');
blockCounter.setAttribute('class', 'block-counter');
mainContainer.append(blockCounter);

const blockCounterMoves = document.createElement('div');
blockCounterMoves.setAttribute('class', 'block-counter__moves');
blockCounter.append(blockCounterMoves);

const movesTitle = document.createElement('h2');
movesTitle.setAttribute('class', 'moves__title');
movesTitle.textContent = ('Moves: ');
blockCounterMoves.append(movesTitle);

const movesNumber = document.createElement('p');
movesNumber.setAttribute('class', 'moves__number');
movesNumber.innerHTML = ('0');
blockCounterMoves.append(movesNumber);

// let movesNumber = N;

const blockCounterTime = document.createElement('div');
blockCounterTime.setAttribute('class', 'block-counter__time');
blockCounter.append(blockCounterTime);

const timeTitle = document.createElement('h2');
timeTitle.setAttribute('class', 'time__title');
timeTitle.textContent = ('Time: ');
blockCounterTime.append(timeTitle);

const timeTimer = document.createElement('p');
timeTimer.setAttribute('class', 'time__timer');
timeTimer.textContent = ('00 : 00');
blockCounterTime.append(timeTimer);



// Shuffle  ---------------------------------------------------

// let newShuffle;

// newShuffle = [];

// function shuffle () {

// const nums = new Set();
// while (nums.size !== 8) {
//     nums.add(Math.floor(Math.random() * 8) + 1);
// }

// newShuffle = [...nums];

// blockSliderBtn.innerHTML = newShuffle;

// console.log([nums]);
// console.log([...nums]);

// }

// shuffle();

// console.log(newShuffle);




// block slider ---------------------------------------------------------

import frame3x3Data from './frame3x3.js';
console.log(frame3x3Data);

import frame4x4Data from './frame4x4.js';
console.log(frame4x4Data);

import frame5x5Data from './frame5x5.js';
console.log(frame5x5Data);

import frame6x6Data from './frame6x6.js';
console.log(frame6x6Data);

import frame7x7Data from './frame7x7.js';
console.log(frame7x7Data);

import frame8x8Data from './frame8x8.js';
console.log(frame8x8Data);


const blockSlider = document.createElement('div');
blockSlider.setAttribute('class', 'block-slider');
mainContainer.append(blockSlider);

let blockSliderBtn;

let newShuffle;

function shuffle() {
const nums = new Set();
while (nums.size !== 8) {
    nums.add(Math.floor(Math.random() * 8) + 1);
}

newShuffle = [...nums];
}



function displayFrame3x3() {
    frame3x3Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_3x3');
        // item.name = newShuffle;
        shuffle(item.name);
        blockSliderBtn.innerHTML = item.name;


        // item.name = newShuffle;
        // blockSliderBtn.innerHTML = newShuffle;
        console.log(item.name);
        // blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
        // blockSliderBtn.innerHTML = newShuffle;

    });

    // blockSliderBtn.innerHTML = newShuffle;
    // newShuffle = item.name;

    console.log(newShuffle);
};

displayFrame3x3();

function displayFrame4x4() {
    frame4x4Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_4x4');
        blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
    });
};


function displayFrame5x5() {
    frame5x5Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_5x5');
        blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
    });
};



function displayFrame6x6() {
    frame6x6Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_6x6');
        blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
    });
};



function displayFrame7x7() {
    frame7x7Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_7x7');
        blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
    });
};



function displayFrame8x8() {
    frame8x8Data.forEach((item, index) => {    // or  for(let i = 0; i < frame3x3Data.length; i++) { }
        blockSliderBtn = document.createElement('button');
        blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_8x8');
        blockSliderBtn.innerHTML = item.name;

        if (item.id === 'empty') {
            blockSliderBtn.classList.add('block-slider__btn_empty');
        };

        blockSlider.append(blockSliderBtn);
        // shuffle();
    });
};




if (btnNewGame.addEventListener("click", () => {
    blockSliderBtn.classList.add('block-slider__btn_active');
}));



// displayFrame3x3();
// shuffle();

// ---------------------------------------------------------

// function displayFrame3x31() {

//     for (let i = 0; i < 9; i++) {

//         blockSliderBtn = document.createElement('button');
//         blockSliderBtn.setAttribute('class', 'block-slider__btn block-slider__btn_3x3');

//         blockSlider.append(blockSliderBtn);

//         let a = new Array(3);

//         // Loop to create 2D array using 1D array
//         for (let i = 0; i < a.length; i++) {
//             a[i] = new Array(3);
//         }

//         let b = 8;

//         // Loop to initialize 2D array elements.
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 a[i][j] = b--;
//                 // blockSliderBtn.innerHTML = (a[i][j]);
//             }
//         }

//         // Loop to display the elements of 2D array. 
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {

//                 blockSliderBtn.innerHTML = (a[i][j]);
//                 // document.write(a[i][j] + " ");
//             }
//             // blockSliderBtn.innerHTML = (a[i][j] + " ");
//             // document.write("<br>");
//         }
//         // blockSliderBtn.innerHTML = (a[i][j] + " ");
//     };
//     // blockSliderBtn.innerHTML = (a[i][j]);
// };
// displayFrame3x31();


// Timer  ------------------------------------------------------------

let timerSeconds;
let timerMinutes;
let mySetInterval;
let myClearInterval;

btnNewGame.addEventListener("click", () => {
    // blockSliderBtn.classList.add('block-slider__btn_active');

    let seconds = 0;

    function showTime() {
        seconds++;
        timerSeconds = lengthString(seconds % 60);
        timerMinutes = lengthString(parseInt(seconds / 60));

        const time = `${timerMinutes} : ${timerSeconds}`;
        timeTimer.textContent = time;
    };

    function lengthString(length) {
        let lengthString = length + "";
        if (lengthString.length < 2) {
            return "0" + lengthString;
        } else {
            return lengthString;
        }
    };

    mySetInterval = setInterval(showTime, 1000);
    showTime();  // not late
});


btnStop.addEventListener("click", () => {
    myClearInterval = clearInterval(mySetInterval);
    menuBody.classList.remove('menu__body_active');
});




// footer  ----------------------------------------------------------

import frameSizesData from './frame_sizes.js';
console.log(frameSizesData);


const footer = document.createElement('footer');
footer.setAttribute('class', 'footer');
bodyWrapper.append(footer);

const footerContainer = document.createElement('div');
footerContainer.setAttribute('class', 'container footer__container');
footer.append(footerContainer);

const blockOtherSizes = document.createElement('div');
blockOtherSizes.setAttribute('class', 'block-other-sizes');
footerContainer.append(blockOtherSizes);

const blockOtherSizesTitle = document.createElement('h3');
blockOtherSizesTitle.setAttribute('class', 'block-other-sizes__title');
blockOtherSizesTitle.textContent = ('Other sizes:');
blockOtherSizes.append(blockOtherSizesTitle);

const blockOtherSizesBtns = document.createElement('form');
blockOtherSizesBtns.setAttribute('class', 'block-other-sizes__btns');
blockOtherSizes.append(blockOtherSizesBtns);



let blockOtherSizesBtn;

frameSizesData.forEach((item) => {

    blockOtherSizesBtn = document.createElement('input');
    blockOtherSizesBtn.setAttribute('class', 'block-other-sizes__btn_radio');
    blockOtherSizesBtn.setAttribute('type', 'radio');
    blockOtherSizesBtn.setAttribute('name', 'sizes');
    blockOtherSizesBtn.setAttribute('id', item.id);
    blockOtherSizesBtn.setAttribute('value', item.id);
    blockOtherSizesBtns.append(blockOtherSizesBtn);

    blockOtherSizesBtn = document.createElement('label');
    blockOtherSizesBtn.setAttribute('class', 'block-other-sizes__btn');
    blockOtherSizesBtn.setAttribute('for', item.id);
    blockOtherSizesBtn.innerHTML = item.id;
    blockOtherSizesBtns.append(blockOtherSizesBtn);

});


let selectedFrameSize = null;

function pickFrameSize(size) {
    selectedFrameSize = size;
}

function displayFrameSizePicker() {
    for (const size of frameSizesData) {
        document.getElementById(size.id).addEventListener('click', () => {
            pickFrameSize(size);

            switch (selectedFrameSize.id) {
                case '3x3': {
                    displayFrame3x3();
                }
                    break;
                case '4x4':
                    displayFrame4x4();
                    break;
                case ('5x5'):
                    displayFrame5x5();
                    break;
                case ('6x6'):
                    displayFrame6x6();
                    break;
                case ('7x7'):
                    displayFrame7x7();
                    break;
                case ('8x8'):
                    displayFrame8x8();
                default:
                    throw new Error("Unsupported frame size:'" + selectedFrameSize.id + "'");
            }

        });
    }
};
displayFrameSizePicker();



// const CLICKS = document.querySelectorAll('.clickable');
// CLICKS.forEach((item) => {
//     item.addEventListener('click', () => {
//         replaceZero(item.innerHTML);
//     })
// })





// setLocalStorage  --------------------------------------------------------

// const enterName = document.querySelector('.enter-name');
// enterName.placeholder = 'Dear Friend';

btnSave.addEventListener("click", () => {

    function setLocalStorage() {
        localStorage.setItem('name', enterName.value);
    }
    window.addEventListener('beforeunload', setLocalStorage);

    function getLocalStorage() {
        if (localStorage.getItem('name')) {
            enterName.value = localStorage.getItem('name');
        }
    }
    window.addEventListener('load', getLocalStorage);

});




// POP UP  ------------------------------------------------------------
// FINISH GAME 

const gameFinish = document.createElement('div');
gameFinish.setAttribute('class', 'pop-up game-finish hidden');
bodyWrapper.append(gameFinish);

const message = document.createElement('h2');
message.setAttribute('class', 'game-finish__message');
message.textContent = (`Hooray! You solved the puzzle in ${timerMinutes} : ${timerSeconds} and N moves!`);
gameFinish.append(message);

const btnNewGame2 = document.createElement('button');
btnNewGame2.setAttribute('class', 'btn game-finish__btn_new-game');
btnNewGame2.textContent = ('New Game');
gameFinish.append(btnNewGame2);

btnNewGame2.addEventListener('click', () => {
    gameFinish.classList.add('hidden');
    gameStart.classList.add('hidden');
});
