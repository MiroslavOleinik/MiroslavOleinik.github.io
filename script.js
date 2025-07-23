const button = document.getElementById('clickableButton');
const congratsContainer = document.getElementById('congrats-container');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;

    if (clickCount < 4) {
        moveButton();
    } else {
        showCongratulations();
    }
});

function moveButton() {
    const buttonRect = button.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    const maxX = bodyRect.width - buttonRect.width;
    const maxY = bodyRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function showCongratulations() {
    const text = "Congratulations!";
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
    
    congratsContainer.innerHTML = ''; // Clear previous content
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.color = colors[i % colors.length];
        congratsContainer.appendChild(span);
    }

    button.style.display = 'none'; // Hide the button
    congratsContainer.classList.add('visible');

    setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 1000); // Redirect after 2 seconds
}
