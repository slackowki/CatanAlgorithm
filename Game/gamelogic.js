const circles = [
    circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9, circle10,
    circle11, circle12, circle13, circle14, circle15, circle16, circle17, circle18, circle19, circle20,
    circle21, circle22, circle23, circle24, circle25, circle26, circle27, circle28, circle29, circle30,
    circle31, circle32, circle33, circle34, circle35, circle36, circle37, circle38, circle39, circle40,
    circle41, circle42, circle43, circle44, circle45, circle46, circle47, circle48, circle49, circle50,
    circle51, circle52, circle53, circle54
];

let highestScore = -Infinity;
let highestScoreCircle = null;

for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];

    let score = getScoreForCircle(circle);
    
    circle.score = score;
    
    if (score > highestScore) {
        highestScore = score;
        highestScoreCircle = circle;
    }
    
    console.log(`Settle Position ${circle.position}`, circle);
}

console.log(`Highest Score is ${highestScore} Settlement Spot (Circle ${highestScoreCircle.position})`);

if (highestScore > 0) {
    const highestScoreDiv = document.querySelector(`.tiny-circle-${highestScoreCircle.position}`);
    if (highestScoreDiv) {
        highestScoreDiv.style.backgroundColor = 'green';
    }
}

function getScoreForCircle(circle) {
    let score = 0;
    const num1 = getNumWaysToRoll(circle.num1);
    const num2 = getNumWaysToRoll(circle.num2);
    const num3 = getNumWaysToRoll(circle.num3);

    score += num1 * getResourceMultiplier(circle.type1);
    if (circle.num2 && circle.type2) {
        score += num2 * getResourceMultiplier(circle.type2);
    }
    if (circle.num3 && circle.type3) {
        score += num3 * getResourceMultiplier(circle.type3);
    }

    return score;
}

function getNumWaysToRoll(num) {
    switch (num) {
        case 6:
        case 8:
            return 5;
        case 5:
        case 9:
            return 4;
        case 10:
        case 4:
            return 3;
        case 11:
        case 3:
            return 2;
        case 12:
        case 2:
            return 1;
        default:
            return 0; // Return 0 for any other number
    }
}

function getResourceMultiplier(resourceType) {
    switch(resourceType) {
        case 'wood':
            return 2;
        case 'brick':
            return 8 / 3;
        case 'wheat':
            return 4;
        case 'sheep':
            return 2;
        case 'ore':
            return 16 / 3;
        case 'sand':
            return 0;
        default:
            return 0;
    }
}