const keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        capslock: false,
        shift: false,
    },

    init() {
        //Create main elements
        this.elements.main = document.createElement("div")
        this.elements.keysContainer = document.createElement("div")

        //Setup main elements
        this.elements.main.classList.add("keyboard_wrapper")
        this.elements.keysContainer.classList.add("keyboard__keys")
        this.elements.keysContainer.append(this._createKeys())

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key")
        
        const shift = document.getElementById("shift")

        // Add to DOM
        this.elements.main.append(this.elements.keysContainer)
        document.body.append(this.elements.main)
        return shift
    },

    _createKeys() {
        const fragment = document.createDocumentFragment()
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space" 
        ]

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button")
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1


            // Add attributes/classes
            keyElement.setAttribute("type", "button")
            keyElement.classList.add("keyboard__key")
            keyElement.textContent = key.toLowerCase()


            switch (key) {
                case "backspace":
                    keyElement.classList.add("key__wide")

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1)
                        this._triggerEvent("oninput")
                        shift.classList.remove("key__dark")
                    })
                    break
            
                case "caps":
                keyElement.classList.add("key__wide", "key__activatable")

                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock()
                    keyElement.classList.toggle("key__active")
                    keyElement.classList.toggle(this.properties.capslock)
                    shift.classList.remove("key__dark")
                })
                break
                
                case "enter":
                keyElement.classList.add("key__wide")

                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n"
                    this._triggerEvent("oninput")
                    shift.classList.remove("key__dark")
                })
                break

                case "shift":
                keyElement.classList.add("key__wide")
                keyElement.setAttribute("id", "shift")

                keyElement.addEventListener("click", () => {
                    this.properties.shift = !this.properties.shift
                    keyElement.classList.toggle("key__dark")
                })
                break
                
                case "space":
                keyElement.classList.add("key__extra-wide")

                keyElement.addEventListener("click", () => {
                    this.properties.value += " "
                    this._triggerEvent("oninput")
                    shift.classList.remove("key__dark")
                })
                break

                default:
                keyElement.addEventListener("click", () => {
                    if (this.properties.capslock) {
                        this.properties.value += this.properties.shift ? key.toLowerCase() : key.toUpperCase()
                        this.properties.shift = false
                    } else {
                        this.properties.value += this.properties.shift ? key.toUpperCase(): key.toLowerCase()
                        this.properties.shift = false
                    }
                    shift.classList.remove("key__dark")
                    this._triggerEvent("oninput")
                })
                break
            }
            fragment.append(keyElement)

            if (insertLineBreak) {
                fragment.append(document.createElement("br"))
            }
        })

        return fragment
    },

    _triggerEvent (handlerName) {
console.log("event Triggered!! Event name: " + handlerName)
    },

    _toggleCapsLock() {
        this.properties.capslock = !this.properties.capslock
        for (const key of this.elements.keys) {
            if (!key.classList.contains("key__wide") && !key.classList.contains("key__extra-wide")) {
                key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase()
            }
        }
    },

    open() {},
    close() {},
}

window.addEventListener("DOMContentLoaded", function() {
    keyboard.init()
    }
)