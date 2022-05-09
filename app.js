class KeyboardElements {
    constructor() {
    this.backquote= ['`', 'ё', '~', 'ё'];
    this.one= ['1', '1', '!', '!'];
    this.two= ['2', '2', '@', '"'];
    this.three= ['3', '3', '#', '№'];
    this.four= ['4', '4', '$', ';'];
    this.five= ['5', '5', '%', '%'];
    this.six= ['6', '6', '^', ':'];
    this.seven= ['7', '7', '&', '?'];
    this.eight= ['8', '8', '*', '*'];
    this.nine= ['9', '9', '(', '('];
    this.zero= ['0', '0', ')', ')'];
    this.minus= ['-', '-', '_', '_'];
    this.equal= ['=', '=', '+', '+'];
    this.backspace= ['Backspace', 'Backspace', 'Backspace', 'Backspace'];
    this.tab= ['Tab', 'Tab', 'Tab', 'Tab'];
    this.keyQ= ['q', 'й', 'q', 'й'];
    this.keyW= ['w', 'ц', 'w', 'ц'];
    this.keyE= ['e', 'у', 'e', 'у'];
    this.keyR= ['r', 'к', 'r', 'к'];
    this.keyT= ['t', 'е', 't', 'е'];
    this.keyY= ['y', 'н', 'y', 'н'];
    this.keyT= ['t', 'е', 't', 'е'];
    this.keyU= ['u', 'г', 'u', 'г'];
    this.keyI= ['i', 'ш', 'i', 'ш'];
    this.keyO= ['o', 'щ', 'o', 'щ'];
    this.keyP= ['p', 'з', 'p', 'з'];
    this.bracketLeft= ['[', 'х', '[', 'х'];
    this.bracketRight= [']', 'ъ', ']', ';'];
    this.backSlash= ['\\', '\\', '|', '/'];
    this.del= ['Delete', 'Delete', 'Delete', 'Delete'];
    this.capsLock= ['CapsLock', 'CapsLock', 'CapsLock', 'СapsLock'];
    this.keyA= ['a', 'ф', 'a', 'ф'];
    this.keyS= ['s', 'ы', 's', 'ы'];
    this.keyD= ['d', 'в', 'd', 'в'];
    this.keyF= ['f', 'а', 'f', 'а'];
    this.keyG= ['g', 'п', 'g', 'п'];
    this.keyH= ['h', 'р', 'h', 'р'];
    this.keyJ= ['j', 'о', 'j', 'о'];
    this.keyK= ['k', 'л', 'k', 'л'];
    this.keyL= ['l', 'д', 'l', 'д'];
    this.semicolon= [';', 'ж', '=', 'ж'];
    this.quote= ["'", 'э', '"', 'э'];
    this.enter= ['Enter', 'Enter', 'Enter', 'Enter'];
    this.shiftLeft= ['Shift', 'Shift', 'Shift', 'Shift'];
    this.keyZ= ['z', 'я', 'z', 'я'];
    this.keyX= ['x', 'ч', 'x', 'ч'];
    this.keyC= ['c', 'с', 'c', 'с'];
    this.keyV= ['v', 'м', 'v', 'м'];
    this.keyB= ['b', 'и', 'b', 'и'];
    this.keyN= ['n', 'т', 'n', 'т'];
    this.keyM= ['m', 'ь', 'm', 'ь'];
    this.comma= [',', 'б', '<', 'б'];
    this.dot= ['.', 'ю', '>', 'ю'];
    this.slash= ['/', '.', '?', ','];
    this.ArrowUp = ['&#8593;', '&#8593;', '&#8593;', '&#8593;'];
    this.ShiftRight = ['Shift', 'Shift', 'Shift', 'Shift'];
    this.ControlLeft = ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'];
    this.WinLeft = ['Win', 'Win', 'Win', 'Win'];
    this.AltLeft = ['Alt', 'Alt', 'Alt', 'Alt'];
    this.Space = [' ', ' ', ' ', ' '];
    this.AltRight = ['Alt', 'Alt', 'Alt', 'Alt'];
    this.ArrowLeft = ['&#8592;', '&#8592;', '&#8592;', '&#8592;'];
    this.ArrowDown = ['&#8595;', '&#8595;', '&#8595;', '&#8595;'];
    this.ArrowRight = ['&#8594;', '&#8594;', '&#8594;', '&#8594;'];
    this.ControlRight = ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'];
    this.ArrowRight = ['&#8594;', '&#8594;', '&#8594;', '&#8594;'];
    this.ControlRight = ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'];
    }
}

const elements = {
        textWrapper: null,
        main: null,
        keysContainer: null,
        functionalKeys: ['tab',
            'capsLock',
            'shiftLeft',
            'ControlLeft',
            'WinLeft',
            'AltLeft',
            'AltRight',
            'ControlRight',
            'ShiftRight',
            'enter',
            'del',
            'backspace']
    }

const properties = {
        lang: "En",
        value: "",
        capsLock: false,
        shift: false,
    }
    
const keyProperties = new KeyboardElements()
const keyLayout = Object.keys(keyProperties) // Array of button names

function initKeyboard() {
        //Create main elements      
        elements.main = document.createElement("div")
        elements.textWrapper = document.createElement("div")
        elements.keysContainer = document.createElement("div")

        //Setup main elements
        elements.textWrapper.classList.add("wrapper")
        elements.main.classList.add("keyboard_wrapper")
        elements.keysContainer.classList.add("keyboard__keys")
        elements.keysContainer.append(createKeys(properties.lang === "En" ? 0 : 1))

        elements.textWrapper.innerHTML = `<h1>Virtual Keyboard</h1>
        <h3>Windows version</h3>
            <div class="textArea">
                <textarea name="yourText" id="textArea" autofocus></textarea>
            </div>
        </div>`

        // Add to DOM
        elements.main.append(elements.keysContainer)
        document.body.append(elements.textWrapper)
        document.body.append(elements.main)
    }

function createKeys(langInd) {
    const fragment = document.createDocumentFragment()

    keyLayout.forEach((element) => {
        const keyElement = document.createElement('button')
        keyElement.innerHTML = `${keyProperties[element][langInd]}`
        const insertLineBreak = ["backspace", "del", "enter", "ShiftRight"].indexOf(element) !== -1        

            // Add attributes/classes
            keyElement.setAttribute("type", "button")
            keyElement.classList.add(`${element}`, "keyboard__key")

        switch (element) {
            case "backspace":
                keyElement.classList.add("key__wide")

                keyElement.addEventListener("click", () => {
                    properties.value = properties.value.substring(0, properties.value.length - 1)
                    for (key in shift) {key.classList.remove("key__dark")}
                })
                break
        
            case "capsLock":
            keyElement.classList.add("key__wide", "key__activatable")

            keyElement.addEventListener("click", () => {
                toggleCapsLock()
                keyElement.classList.toggle("key__active")
            })
            break
            
            case "enter":
            keyElement.classList.add("key__wide")

            keyElement.addEventListener("click", () => {
                properties.value += "\n"
            })
            break

            // case ("shiftLeft"):
            // keyElement.classList.add("key__wide")
            // keyElement.setAttribute("id", "shift")

            // keyElement.addEventListener("click", () => {
            //     properties.shift = !properties.shift
            //     keyElement.classList.toggle("key__dark")
            // })
            // break

            // case ("ShiftRight"):
            // keyElement.classList.add("key__wide")
            // keyElement.setAttribute("id", "shift")

            // keyElement.addEventListener("click", () => {
            //     properties.shift = !properties.shift
            //     keyElement.classList.toggle("key__active")

            // })
            // break
            
            case "Space":
            keyElement.classList.add("key__extra-wide")

            keyElement.addEventListener("click", () => {
                properties.value += " "
            })
            break

            default:
            keyElement.addEventListener("click", () => {
                if (properties.capsLock) {
                    properties.value += properties.shift ? key.toLowerCase() : key.toUpperCase()
                    properties.shift = false
                } else {
                    properties.value += properties.shift ? key.toUpperCase(): key.toLowerCase()
                    properties.shift = false
                }
            })
            break
        }
        fragment.append(keyElement)

        if (insertLineBreak) {
            fragment.append(document.createElement("br"))
        }
    })

    return fragment
}

function switchSymbols (langInd) {
    keyLayout.forEach((element) => {
      const key = document.querySelector(`.${element}`)
      key.innerHTML = keyProperties[element][langInd]
    })
}

const onShift = () => {
    keyLayout.forEach((el) => {
    if (!elements.functionalKeys.includes(el)) {
        const key = document.querySelector(`.${element}`)
        if (!properties.capsLock) {key.innerHTML = key.innerHTML.toUpperCase()}
    }
})
}

function toggleCapsLock() {
        properties.capsLock = !properties.capsLock
        for (const el of keyLayout) {
            const key = document.querySelector(`.${el}`)
            if (!elements.functionalKeys.includes(el)) {
                key.textContent = properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase()
            }
        }
}




window.addEventListener("DOMContentLoaded", function() {
        initKeyboard()
    }
)