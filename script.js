
// This is my answer
const newGridBtn = document.querySelector('.newGridBtn')
const container = document.querySelector('#container')



const createGrid = (num) => {
    container.textContent = '';


    for(let i = 0; i < (num*num); i++){
        const element = document.createElement('div');
        element.classList.add('grid');
        container.appendChild(element);
        
        const size = 960/num ; 
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
    }
}

container.addEventListener('mouseover', (e) => {
console.log(e.target);
if (e.target.classList.contains('grid')) {
    e.target.style.backgroundColor = 'black';
}
});

newGridBtn.addEventListener('click', () =>{
    
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


// Colour a square black when you hover over it (pixel trail)

createGrid(16);