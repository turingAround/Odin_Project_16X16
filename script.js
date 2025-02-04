// script.js
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create 256 squares (16x16)
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    
    // Add mouseover event listener to each square
    square.addEventListener('mouseover', function(e) {
        // Add colored class to create the trail effect
        e.target.classList.add('colored');
    });
    
    container.appendChild(square);
}

function createGrid(size) {
    // Clear existing grid first
    const container = document.querySelector('.container') || document.createElement('div');
    container.innerHTML = '';
    container.classList.add('container');
    document.body.appendChild(container);

    // Calculate new square sizes based on input
    const squares = size * size;
    
    // Update CSS custom property for dynamic grid sizing
    container.style.setProperty('--grid-size', size);

    // Create new grid
    for (let i = 0; i < squares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        square.addEventListener('mouseover', function(e) {
            e.target.classList.add('colored');
        });
        
        container.appendChild(square);
    }
}

// Add button functionality
const gridButton = document.createElement('button');
gridButton.textContent = 'Change Grid Size';
gridButton.id = 'gridSize';
document.body.insertBefore(gridButton, document.body.firstChild);

gridButton.addEventListener('click', function() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

// Create initial 16x16 grid
createGrid(16);
