const button = document.querySelector('button')
// console.log(button);
const boxColor = document.querySelectorAll('.box')
// console.log(boxColor);

button.addEventListener('click', () => {
    boxColor.forEach (box => {
        const ran256 = Math.round(Math.random() * 256);
        const ran257 = Math.round(Math.random() * 256);
        const ran258 = Math.round(Math.random() * 256);
        const randomColors = `rgb(${ran256},${ran257},${ran258})`;
        box.style.backgroundColor = randomColors;
    })
})