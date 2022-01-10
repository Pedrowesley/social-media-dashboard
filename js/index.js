const btnToggle = document.querySelector('.btn-toogle');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});