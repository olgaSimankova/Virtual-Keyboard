class KeyboardElements {
    constructor() {
        this.Backquote = ['`', 'ё', '~', 'ё'];
        this.Digit1 = ['1', '1', '!', '!'];
        this.Digit2 = ['2', '2', '@', '"'];
        this.Digit3 = ['3', '3', '#', '№'];
        this.Digit4 = ['4', '4', '$', ';'];
        this.Digit5 = ['5', '5', '%', '%'];
        this.Digit6 = ['6', '6', '^', ':'];
        this.Digit7 = ['7', '7', '&', '?'];
        this.Digit8 = ['8', '8', '*', '*'];
        this.Digit9 = ['9', '9', '(', '('];
        this.Digit0 = ['0', '0', ')', ')'];
        this.Minus = ['-', '-', '_', '_'];
        this.Equal = ['=', '=', '+', '+'];
        this.Backspace = ['Backspace', 'Backspace', 'Backspace', 'Backspace'];
        this.Tab = ['Tab', 'Tab', 'Tab', 'Tab'];
        this.KeyQ = ['q', 'й', 'q', 'й'];
        this.KeyW = ['w', 'ц', 'w', 'ц'];
        this.KeyE = ['e', 'у', 'e', 'у'];
        this.KeyR = ['r', 'к', 'r', 'к'];
        this.KeyT = ['t', 'е', 't', 'е'];
        this.KeyY = ['y', 'н', 'y', 'н'];
        this.KeyU = ['u', 'г', 'u', 'г'];
        this.KeyI = ['i', 'ш', 'i', 'ш'];
        this.KeyO = ['o', 'щ', 'o', 'щ'];
        this.KeyP = ['p', 'з', 'p', 'з'];
        this.BracketLeft = ['[', 'х', '[', 'х'];
        this.BracketRight = [']', 'ъ', ']', ';'];
        this.Backslash = ['\\', '\\', '|', '/'];
        this.Delete = ['Delete', 'Delete', 'Delee', 'Delete'];
        this.CapsLock = ['CapsLock', 'CapsLock', 'CapsLock', 'СapsLock'];
        this.KeyA = ['a', 'ф', 'a', 'ф'];
        this.KeyS = ['s', 'ы', 's', 'ы'];
        this.KeyD = ['d', 'в', 'd', 'в'];
        this.KeyF = ['f', 'а', 'f', 'а'];
        this.KeyG = ['g', 'п', 'g', 'п'];
        this.KeyH = ['h', 'р', 'h', 'р'];
        this.KeyJ = ['j', 'о', 'j', 'о'];
        this.KeyK = ['k', 'л', 'k', 'л'];
        this.KeyL = ['l', 'д', 'l', 'д'];
        this.Semicolon = [';', 'ж', ':', 'ж'];
        this.Quote = ["'", 'э', '"', 'э'];
        this.Enter = ['Enter', 'Enter', 'Enter', 'Enter'];
        this.ShiftLeft = ['Shift', 'Shift', 'Shift', 'Shift'];
        this.KeyZ = ['z', 'я', 'z', 'я'];
        this.KeyX = ['x', 'ч', 'x', 'ч'];
        this.KeyC = ['c', 'с', 'c', 'с'];
        this.KeyV = ['v', 'м', 'v', 'м'];
        this.KeyB = ['b', 'и', 'b', 'и'];
        this.KeyN = ['n', 'т', 'n', 'т'];
        this.KeyM = ['m', 'ь', 'm', 'ь'];
        this.Comma = [',', 'б', '<', 'б'];
        this.Period = ['.', 'ю', '>', 'ю'];
        this.Slash = ['/', '.', '?', ','];
        this.ArrowUp = ['&#8593;', '&#8593;', '&#8593;', '&#8593;'];
        this.ShiftRight = ['Shift', 'Shift', 'Shift', 'Shift'];
        this.ControlLeft = ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'];
        this.MetaLeft = ['Win', 'Win', 'Win', 'Win'];
        this.AltLeft = ['Alt', 'Alt', 'Alt', 'Alt'];
        this.Space = [' ', ' ', ' ', ' '];
        this.AltRight = ['Alt', 'Alt', 'Alt', 'Alt'];
        this.ArrowLeft = ['&#8592;', '&#8592;', '&#8592;', '&#8592;'];
        this.ArrowDown = ['&#8595;', '&#8595;', '&#8595;', '&#8595;'];
        this.ArrowRight = ['&#8594;', '&#8594;', '&#8594;', '&#8594;'];
        this.ControlRight = ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'];
      }
}

const elements = {
        textWrapper: null,
        main: null,
        keysContainer: null,
        functionalKeys: ['tab',
            'CapsLock',
            'ShiftLeft',
            'ControlLeft',
            'MetaLeft',
            'AltLeft',
            'AltRight',
            'ControlRight',
            'ShiftRight',
            'Enter',
            'Delete',
            'Backspace']
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
        const insertLineBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(element) !== -1        

            // Add attributes/classes
            keyElement.setAttribute("type", "button")
            keyElement.classList.add(`${element}`, "keyboard__key")

        switch (element) {
            case "Backspace":
                keyElement.classList.add("key__wide")
                break
        
            case "CapsLock":
            keyElement.classList.add("key__wide", "key__activatable")
            break
            
            case "enter":
            keyElement.classList.add("key__wide")
            break

            case ("ShiftLeft"):
            keyElement.classList.add("key__wide")
            break

            case ("ShiftRight"):
            keyElement.classList.add("key__wide")
            break

            case ("CapsLock"):
            keyElement.classList.add("key__wide")
            break
            
            case "Space":
            keyElement.classList.add("key__extra-wide")
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

function toggleCapsLock() {
        properties.capsLock = !properties.capsLock
        for (const el of keyLayout) {
            const key = document.querySelector(`.${el}`)
            if (!elements.functionalKeys.includes(el)) {
                key.textContent = properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase()
            }
        }
}

const shiftHandler = () => {
const condition = document.querySelector('.ShiftLeft').classList.contains('key__active')
    || document.querySelector('.ShiftRight').classList.contains('key__active')

const noneCapsLockToUpper = () => {
    keyLayout.forEach((el) => {
    if (!elements.functionalKeys.includes(el)) {
        const key = document.querySelector(`.${el}`)
        if (!properties.capsLock) {
        key.innerHTML = key.innerHTML.toUpperCase()
        }
    }
    })
}

const capsLockToUpper = () => {
    keyLayout.forEach((el) => {
    if (!elements.functionalKeys.includes(el)) {
        const key = document.querySelector(`.${el}`)
        if (properties.capsLock) {
        key.innerHTML = key.innerHTML.toUpperCase()
        }
    }
    })
}

if (condition && properties.lang === 'En') {
    switchSymbols(2)
    noneCapsLockToUpper()
} else if (!condition && properties.lang === 'En') {
    switchSymbols(0)
    capsLockToUpper()
} else if (condition && properties.lang === 'Ru') {
    switchSymbols(3)
    noneCapsLockToUpper()
} else if (!condition && properties.lang === 'Ru') {
    switchSymbols(1)
    capsLockToUpper()
}
}
  
const capsLockHandler = () => {
const shifts = document.querySelector('.ShiftLeft').classList.contains('active')
    || document.querySelector('.ShiftRight').classList.contains('active')

keyLayout.forEach((el) => {
    if (!elements.functionalKeys.includes(el)) {
    const key = document.querySelector(`.${el}`)
    if (properties.capsLock) {
        key.innerHTML = key.innerHTML.toUpperCase()
    } else if (!shifts) {
        key.innerHTML = key.innerHTML.toLowerCase()
    }
    }
    })
shiftHandler()
}

  const switchLayout = () => {
    const condition = document.querySelector('.ControlLeft').classList.contains('key__active') 
    && document.querySelector('.AltLeft').classList.contains('key__active')
    if (condition && properties.lang === 'En') {
      properties.lang = 'Ru'
      switchSymbols(1)
    } else if (condition && properties.lang === 'Ru') {
        properties.lang = 'En'
      switchSymbols(0)
    }
    toggleCapsLock()
  }
  
  function textareaMouseListener (event) {
      console.log(event.target.classList[0])
    const textarea = document.getElementById('textArea')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    if (event.target.classList[0] === 'Backspace') {
      properties.value = properties.value.substring(0, start > 0 ? start - 1 : start) + properties.value.substring(end)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = start > 0 ? end - 1 : end
    }
    if (event.target.classList[0] === 'Delete') {
        properties.value = properties.value.substring(0, start) + properties.value.substring(end + 1)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = end
    }
    if (event.target.classList[0] === 'Enter') {
      properties.value = properties.value.substring(0, start) + "\n" + properties.value.substring(end)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = end + 1
    }
    if (event.target.classList[0] === 'Tab') {
        properties.value = properties.value.substring(0, start) + '\t' + properties.value.substring(end)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = end + 1
    }
    if (keyLayout.includes(event.target.classList[0]) && !elements.functionalKeys.includes(event.target.classList[0])) {
        properties.value = properties.value.substring(0, start)
        + event.target.textContent + properties.value.substring(end)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = (start === end) ? (end + 1) : end
    }
  }
  
  const textareaKeyboardListener = (event) => {
    const textarea = document.getElementById('textArea')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const target = document.querySelector(`.${event.code}`)
    event.preventDefault()
    if (event.code === 'Backspace') {
        properties.value = properties.value.substring(0, start > 0 ? start - 1 : start) + properties.value.substring(end)
        textarea.value = properties.value
        textarea.focus()
        textarea.selectionEnd = start > 0 ? end - 1 : end
    }
    if (event.code === 'Delete') {
        properties.value = properties.value.substring(0, start) + properties.value.substring(end + 1)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = end
    }
    if (event.code === 'Enter') {
        properties.value = properties.value.substring(0, start) + "\n" + properties.value.substring(end)
        textarea.value = properties.value
        textarea.focus()
        textarea.selectionEnd = end + 1
    }
    if (event.code === 'Tab') {
        properties.value = properties.value.substring(0, start) + '\t' + properties.value.substring(end)
        textarea.value = properties.value
        textarea.focus()
        textarea.selectionEnd = end + 1
    }
    if (keyLayout.includes(event.code) && !elements.functionalKeys.includes(event.code)) {
        properties.value = properties.value.substring(0, start)
        + event.target.textContent + properties.value.substring(end)
      textarea.value = properties.value
      textarea.focus()
      textarea.selectionEnd = (start === end) ? (end + 1) : end
    }
  }
  
  const mouseListener = () => {
    document.querySelector('.keyboard__keys').addEventListener('mousedown', (event) => {
      textareaMouseListener(event)
      if (event.target.classList.contains('CapsLock')) {
        event.target.classList.toggle('key__active')
        toggleCapsLock()
      } else if (event.target.classList.contains('ShiftLeft') && !properties.shift) {
        event.target.classList.add('key__active')
        shiftHandler()
      } else if (event.target.classList.contains('ShiftRight') && !properties.shift) {
        event.target.classList.add('key_active')
        shiftHandler()
      } else if (!event.target.classList.contains('ShiftRight')
        && !event.target.classList.contains('ShiftLeft')) {
        event.target.classList.add('key__active')
      }
    })

    document.addEventListener('mouseup', () => {
      if (document.querySelector('.ShiftLeft').classList.contains('key__active') && !properties.shift) {
        document.querySelector('.ShiftLeft').classList.remove('key__active')
        shiftHandler()
      }
      if (document.querySelector('.ShiftRight').classList.contains('key__active') && !properties.shift) {
        document.querySelector('.ShiftRight').classList.remove('key__active')
        shiftHandler()
      }
      keyLayout.forEach((element) => {
        if (element !== 'CapsLock' && element !== 'ShiftRight' && element !== 'ShiftLeft') {
          document.querySelector(`.${element}`).classList.remove('key__active')
        }
      })
    })
  }
  
const keyboardListener = () => {
    document.addEventListener('keydown', (event) => {

      textareaKeyboardListener(event)

      if (document.querySelector(`.${event.code}`)) {
        if (event.code === 'CapsLock' && !properties.capsLock) {
          properties.capsLock = true
          document.querySelector(`.${event.code}`).classList.toggle('key__active')
          toggleCapsLock()
        } else if (event.code === 'ShiftLeft' && !properties.shift) {
          properties.shift = true
          document.querySelector(`.${event.code}`).classList.add('key__active')
          shiftHandler()
        } else if (event.code === 'ShiftRight' && !properties.shift) {
          properties.shift = true
          document.querySelector(`.${event.code}`).classList.add('key__active')
          shiftHandler()
        } else if (event.code !== 'ShiftLeft' && event.code !== 'ShiftRight') {
          document.querySelector(`.${event.code}`).classList.add('key__active')
        }
      }
    })

    document.addEventListener('keyup', (event) => {
      switchLayout()
      if (document.querySelector(`.${event.code}`)) {
        if (event.code === 'CapsLock') {
          properties.capsLock = false
        } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          properties.shift = false
          document.querySelector('.ShiftRight').classList.remove('key__active')
          document.querySelector('.ShiftLeft').classList.remove('key__active')
        } else {
          document.querySelector(`.${event.code}`).classList.remove('key__active')
        }
      }
    })
  }
  
  const getLocalStorage = () => {
    if (localStorage.getItem('language')) properties.lang = localStorage.getItem('language')
    else properties.lang = 'En'
  };
  
  const setLocalStorage = () => {
    const setLang = () => {
      localStorage.setItem('language', properties.lang)
    }
    window.addEventListener('beforeunload', setLang)
  }


window.addEventListener("DOMContentLoaded", function() {
        getLocalStorage()
        initKeyboard()
        keyboardListener()
        mouseListener()
        setLocalStorage()
    }
)