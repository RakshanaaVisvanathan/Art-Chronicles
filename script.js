document.querySelectorAll('.like').forEach(button => {
 button.addEventListener('click', event => {
    event.preventDefault();
    const count = parseInt(button.parentElement.querySelector('.likes-count').textContent, 10);
    button.parentElement.querySelector('.likes-count').textContent = count + 1;
 });
});