// randomData.js

const resourceLimits = {
    sheep: 4,
    wood: 4,
    wheat: 4,
    ore: 3,
    brick: 3,
};

let numbers = [10, 2, 9, 12, 6, 4, 10, 9, 11, 0, 3, 8, 8, 3, 4, 5, 5, 6, 11];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadUniqueNumber() {
    if (numbers.length === 0) {
        return null; 
    }
    return numbers.pop(); 
}

const colorToResourceMap = {
    '#5DADE2': 'sheep',
    '#58D68D': 'wood',
    '#F7DC6F': 'wheat',
    '#839192': 'ore',
    '#E74C3C': 'brick',
    '#F0E68C': 'sand'
};

function getRandomColors(number) {
    if (number === 0) {
        return 'sand';
    } else {
        const availableResources = Object.keys(resourceLimits).filter(resource => resourceLimits[resource] > 0);
        const index = Math.floor(Math.random() * availableResources.length);
        const resource = availableResources[index];
        resourceLimits[resource]--; 
        return resource;
    }
}

function fillCircles() {
        console.log('fillCircles function is being executed.'); // Add this line to log the execution
        const container = document.querySelector('.container');
        container.innerHTML = ''; // Clear existing circles
        let overallPosition = 0;
        const circleObjects = [];
    
        createRow(3);
        createRow(4);
        createRow(5);
        createRow(4);
        createRow(3);
    
        function createRow(count) {
            const row = document.createElement('div');
            row.classList.add('row');
    
            shuffleArray(numbers); 
    
            for (let i = 0; i < count; i++) {
                const circle = document.createElement('div');
                const number = loadUniqueNumber();
                const resource = getRandomColors(number);
                
                circle.classList.add('circle', resource); // Add resource class instead of hex color code
                circle.classList.add('circle');
                circle.textContent = `${number}`;
                row.appendChild(circle);
        
                const circleObject = {
                    position: overallPosition,
                    resource: resource,
                    number: number
                };
                circleObjects.push(circleObject); 
                overallPosition++; 
        
                console.log(circleObject);
            }
            container.appendChild(row);
        }
    }

// Export the function to be able to call it from other files
window.fillCircles = fillCircles;
