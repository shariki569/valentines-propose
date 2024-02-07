const noButton = document.getElementById('no');

let timeOutID;

noButton.addEventListener('mouseenter', () => {
    const maxX = 300;
    const maxY = 300;

    const randomX = Math.random() * maxX - maxX * 2;
    const randomY = Math.random() * maxY - maxY  * 2;

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`

    clearTimeout(timeOutID);
})

noButton.addEventListener('mouseout', () => {

    timeOutID = setTimeout(() => {
        noButton.style.transform = 'translate(0, 0)'
    }, 1000)


})