const body = document.querySelector('body');
body.setAttribute("style", "background-Color: ivory;")

// This is my answer
const newGridBtn = document.querySelector('.newGridBtn')
const container = document.querySelector('#container')
let isPainting = false;
const colorPicker = document.querySelector('#colorPicker')
const colorOutput = document.querySelector('#colorOutput')


const createGrid = (num) => {
    container.textContent = '';


    for(let i = 0; i < (num*num); i++){
        const element = document.createElement('div');
        element.classList.add('grid');
        container.appendChild(element);
        
        const size = 960/num ; 
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = 'white'
    }
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyD') {
    isPainting = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyD') {
    isPainting = false;
  }
});

container.addEventListener('mouseover', (e) => {
    console.log(e.target);
    if (e.target.classList.contains('grid') && isPainting) {
        e.target.style.backgroundColor = colorPicker.value;
    }
});

newGridBtn.addEventListener('mouseup', () =>{
    
    let z = prompt('Enter grid size:');
    if (z === null) return;
    let size_num = parseInt(z);

    if(isNaN(size_num) || size_num < 1) {
        alert('Please enter a positive number.');
        return;
    }
    container.textContent = '';
    createGrid(size_num);
})

colorPicker.addEventListener('input', (e) => {
  colorOutput.innerText = colorPicker.value; 
  colorOutput.style.color = colorPicker.value; 
});


// Colour a square black when you hover over it (pixel trail)

createGrid(36);