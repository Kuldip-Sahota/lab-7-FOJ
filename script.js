const hoverButton = document.getElementById('hover-button');
const hoverMessage = document.getElementById('hover-message');

hoverButton.addEventListener('mouseover', () => {
    hoverMessage.textContent = "You hovered over the button!";
});

hoverButton.addEventListener('mouseout', () => {
    hoverMessage.textContent = "You left the button.";
});

const keyInput = document.getElementById('key-input');
const keyMessage = document.getElementById('key-message');

keyInput.addEventListener('keyup', (event) => {
    keyMessage.textContent = `You pressed: ${event.key}`;
});

const form = document.getElementById('submission-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = "Form submitted successfully!";
});

const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = "Input is focused!";
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = "Input lost focus.";
});

const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegationMessage.textContent = `You clicked: ${event.target.textContent}`;
    }
});
