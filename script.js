const hoverButton = document.getElementById('hover-button');
const hoverMessage = document.getElementById('hover-message');

hoverButton.addEventListener('mouseover', () => {
    hoverMessage.textContent = "You hovered over the button!";
});

hoverButton.addEventListener('mouseout', () => {
    hoverMessage.textContent = "You left the button.";
});
