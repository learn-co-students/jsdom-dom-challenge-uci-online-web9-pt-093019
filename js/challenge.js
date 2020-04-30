
const counterPlaceHolder = document.getElementById('counter')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const heartBtn = document.getElementById('heart')
const pauseBtn = document.getElementById('pause')
const likeList = document.querySelector('.likes')
const likeListItems = likeList.children
const commentForm = document.querySelector('form#comment-form')
const commentDiv = document.getElementById('list')


let pauseVal = 0
let counterVal = -1
let likeItemId = 1

let timerFunction = setInterval(timerUpdate, 1000)

function timerUpdate() {
    counterVal += 1
    counterPlaceHolder.innerText = counterVal
}

minusBtn.addEventListener('click', () => {
    clearInterval(timerFunction)
    counterVal -= 1
    counterPlaceHolder.innerText = counterVal
    timerFunction = setInterval(timerUpdate, 1000)
})

plusBtn.addEventListener('click', () => {
    clearInterval(timerFunction)
    counterVal += 1
    counterPlaceHolder.innerText = counterVal
    timerFunction = setInterval(timerUpdate, 1000)
})

heartBtn.addEventListener('click', () => {
    let likeItem = likeList.children.namedItem(counterVal)
    
    if (likeItem === null) {
        likeItem = document.createElement('li')
        likeItem.id = counterVal
        likeItem.setAttribute('data-id', 1)
        likeItem.innerText = `Counter time: ${likeItem.id} was liked 1 time!`
        likeList.appendChild(likeItem)
    }
    else {
        const likeCounter = parseInt(likeItem.getAttribute('data-id'))
        likeItem.setAttribute('data-id', likeCounter + 1)
        likeItem.innerText = `Counter time: ${likeItem.id} was liked ${likeCounter + 1} times!`
        likeList.appendChild(likeItem)
    }   
})

pauseBtn.addEventListener('click', () => {
    if (pauseVal === 0) {
        minusBtn.disabled = true
        plusBtn.disabled = true
        heartBtn.disabled = true
        clearInterval(timerFunction)
        document.getElementById('pause').innerText = 'resume'
        pauseVal = 1
    }
    else {
        minusBtn.disabled = false
        plusBtn.disabled = false
        heartBtn.disabled = false
        clearInterval(timerFunction)
        document.getElementById('pause').innerText = 'pause'
        timerFunction = setInterval(timerUpdate, 1000)
        pauseVal = 0
    }
})

commentForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let commentItem = document.createElement('p')
    commentItem.innerText = event.target.querySelector('input#comment-input').value
    commentDiv.appendChild(commentItem)
})
