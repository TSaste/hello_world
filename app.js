// Setting up random color
const setColor = () => {
    setInterval(function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.color = "#" + randomColor;
    }, 800);
}
setColor()
