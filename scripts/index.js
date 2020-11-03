const grid = document.querySelector('.container-grid');
const btnGrid = document.querySelector('#set-grid');
const btnReset = document.querySelector('#reset');
const btnRandColor = document.querySelector('#btn-rand-color');
const colorDiv = document.querySelector('.color');
const btnPick = document.querySelector('#picker');
const newPick = document.querySelector('#new-pick');


const randColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`
}


function createSqure(){
    const newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'square')
    grid.append(newGrid);
    newGrid.addEventListener('contextmenu', function(e){
        e.preventDefault();
        newGrid.style.backgroundColor = 'white';
    })
    newGrid.addEventListener('click', function(){
        newGrid.style.backgroundColor = newPick.value;
    })
}

function resize(userInput=5){
    grid.innerHTML = '';
    grid.setAttribute('style', `grid-template-columns: repeat(${userInput}, 1fr);`)
    for (let i = 0; i < userInput * userInput; i++){
        createSqure();
    }
}

resize();

let userInput;

btnGrid.addEventListener('click', function(){
    userInput = prompt('Grid Size: ');
    while (!Number(userInput)){
        userInput = prompt('Grid Size: ');
    }
    if (userInput > 88 || userInput < 1){
        resize();
    } else {
        resize(userInput);
    }
});

btnReset.addEventListener('click', function(){
    if (userInput){
        resize(userInput);
    } else {
        resize();
    }
});

btnRandColor.addEventListener('click', function () {
    let gridCells = document.querySelectorAll('.square');
    gridCells.forEach((cell) => {
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = randColor();
        });
    });
});

btnPick.addEventListener('click', function(){
    colorDiv.classList.toggle('color');
    let gridCells = document.querySelectorAll('.square');
    gridCells.forEach(square => {
        square.addEventListener('click', function(){
            square.style.backgroundColor = newPick.value;
        });
    });
});
