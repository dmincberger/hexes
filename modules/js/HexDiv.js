export default class CustomDiv {

    constructor(width, height, color, clippy_path, identyfikator) {

        console.log(this)

        this.width = width
        this.height = height
        this.color = color
        this.clippy_path = clippy_path
        this.identyfikator = identyfikator
        //
        this.createDiv()

    }

    createDiv() {
        this.div = document.createElement("div")
        this.div.style.width = `${this.width}px`
        this.div.style.height = `${this.height}px`
        this.div.style.backgroundColor = this.color
        this.div.style.color = "white"
        this.div.style.position = "absolute"
        this.div.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
        this.div.style.textAlign = "center"
        this.div.classList.add("test")
        this.div.style.backgroundRepeat = "no-repeat"
        this.div.style.margin = "2px"
        this.div.style.color = "red"
        this.div.style.backgroundImage = 'url("./modules/gfx/strzalae.png")'
        // this.div.classList.add("hexagon-container")
        this.div.id = this.identyfikator
    }

    getRoot() {
        return this.div
    }

    setXY(x, y) {
        this.div.style.left = `${x}px`
        this.div.style.top = `${y}px`
    }
    setText(text) {
        this.innerHTML = text
    }
}