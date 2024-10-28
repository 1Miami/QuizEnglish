const questions = [1, 2, 3];

function handleClick(index) {
    console.log(`Div ${index} was clicked!`);
}

// Get the div elements
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

// Add click event listeners to the divs
card1.addEventListener('click', () => handleClick(1));
card2.addEventListener('click', () => handleClick(2));
card3.addEventListener('click', () => handleClick(3));
card4.addEventListener('click', () => handleClick(4));
