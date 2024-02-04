let imgCard = document.getElementsByClassName("imgCard")[0]
let cardWidth = imgCard.offsetWidth
let container = document.getElementsByClassName("container")[0]



let resize = () => {
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    let setWidth = cardWidth / windowWidth * 100
    let ratio = windowWidth / windowHeight
    let dig1 = document.getElementsByClassName("dig1")
    container.style.maxWidth = setWidth.toString() + "vh"
    dig1 = Array.from(dig1)
    dig1.forEach(element => {
        if (ratio > 1.6 && ratio > 1) {
            element.style.fontSize = "1.5vw"
        }
        else {
            element.style.fontSize = "1.9vw"
        }
    });
}
resize()
window.addEventListener('resize', resize(), true);

