
//document.addEventListener("DOMContentLoaded", function() {   
    let count = 0 
    let pauseCounter = false

    // css elements to be modified 
    const counterElement = document.getElementById("counter")
    const plusElement = document.getElementById("plus")
    const minusElement = document.getElementById("minus")
    const heartElement = document.getElementById("heart")
    const likeElement = document.getElementsByClassName("likes")
    const pauseElement = document.getElementById("pause")

    // need to keep track of each counter value and associated number of likes 
    // array position is counter value
    // array value is number of likes 
    const numberOfLikesForEachCounerValue = [0] // count is initialized as 0 (line 2), associated likes with counter 0 is 0    

    // increment counter ever 1000 ms 
    let timer = window.setInterval(incrementTimer, 1000);
    

    function incrementTimer() {
        count += 1 
        counterElement.innerText = `${count}`
        // only add to number of likes array if this is uncharted territory
        // remember users can click minus so we don't want to add unnecessarially 
        if (numberOfLikesForEachCounerValue.size > count) {}
        else {numberOfLikesForEachCounerValue.push(0)}
         
        displayLikes()
    }

    function decrementTimer() {
        count -= 1 
        counterElement.innerText = `${count}`
        displayLikes()
    }

    // manually increment counter 

    plusElement.addEventListener('click', function (e){
        incrementTimer()
    })
    minusElement.addEventListener('click', function (e){
        decrementTimer()
    })

    // likes 

    heartElement.addEventListener("click", function() {
        numberOfLikesForEachCounerValue[count] += 1 
        displayLikes()
    })

    function displayLikes() {
        // create li element if this is the first. 
        // otherwise update li element that was previously created. 
        if (likeElement[0].childElementCount == 0) {
            likes = document.createElement("li")
            likes.innerText = `Likes: ${numberOfLikesForEachCounerValue[count]}`
            likeElement[0].appendChild(likes)
        }
        else {
            likes = likeElement[0].children[0]
            likes.innerText = `Likes: ${numberOfLikesForEachCounerValue[count]}`
        }        
    }

    // pause 

    pauseElement.addEventListener('click', function(){
        
        if (pauseCounter == false) {
            pauseCounter = true 
            window.clearInterval(timer)
        } else {
            pauseCounter = false 
            timer = window.setInterval(incrementTimer, 1000);
        }       
    })

//})