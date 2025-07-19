const container = document.querySelector('.container');
const btnBoxesPerRow = document.querySelector('.boxesPerRow');
const btnClear = document.querySelector('.clear');
const inputBoxPerRow = document.getElementById('boxesPerRow');

//creat boxes
function makeboxes (boxes) {
    container.innerHTML = '';
    const boxSize = 480 / boxes;
    for (let i = 0; i < boxes**2; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute("style", `width: ${boxSize}px; height: ${boxSize}px;`);
        container.appendChild(div);
    }
    markTrail()
}

// mouseover
function markTrail(){            
    const colorTrail = document.getElementsByClassName("box");
      for(i = 0; i < colorTrail.length; i++){
        colorTrail[i].addEventListener('mouseover', (e) => {
          if(document.getElementById('rainbow').checked){
            let getRandomColor = () => Math.ceil(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
          } else {
            e.target.style.backgroundColor = "rgb(255, 143, 210)"; 
          }       
        }
    )};
  }

//box per row button
btnBoxesPerRow.addEventListener('click', () => {
    const inputValue = inputBoxPerRow.value;
    if (inputValue > 0 && inputValue < 100) {
        makeboxes(inputValue);
    } else {
        alert("Please enter a number between 1 and 99.")
    }
    markTrail()
});

// clear
btnClear.addEventListener('click', () => {
    const inputValue = inputBoxPerRow.value;
    makeboxes(inputValue > 0 ? inputValue : 3);
    markTrail()
});

// Initial setup
makeboxes(3);

