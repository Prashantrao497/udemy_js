document.addEventListener('keydown', (event) => {
    const keyDisplay = document.querySelector('.key-display');
    const codeDisplay = document.querySelector('.code-display');
    const keyCodeDisplay = document.querySelector('.keycode-display');

    keyDisplay.textContent = event.key;
    codeDisplay.textContent = event.code;
    keyCodeDisplay.textContent = event.keyCode;

    const keyElements = document.querySelectorAll('.key-content-animation');
    keyElements.forEach(el => {
        el.classList.add('active');
    });

    setTimeout(() => {
        keyElements.forEach(el => {
            el.classList.remove('active');
        });
    }, 200);
});
