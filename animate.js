function animateHomeScreen(){
    animateHomeScreenID = requestAnimationFrame(animateHomeScreen)
    c.fillStyle = 'rgba(0,0,0,0.08)'
    c.fillRect(0,0,canvas.width, canvas.height)
    numsForAnimation.forEach((num, index) => {
        num.update()
        if(num.y > canvas.height){
            numsForAnimation.splice(index, 1)
        }
    })
}

function animateHouseScreen(){
    animateHouseScreenID = requestAnimationFrame(animateHouseScreen)
}

homeScreenAnimationManager()

setInterval(() => {    
    numsForAnimation.push(new Number(Math.random()*canvas.width,0,1))
}, 300)



house.addEventListener('click', () => {
    atHomeScreen = false
    atHouse = true
    homeScreenAnimationManager()
})

house.addEventListener('mouseover',() => {
    descriptions.innerHTML = "Your home. This is where you work for now."
})
house.addEventListener('mouseleave',() => {
    descriptions.innerHTML = ""
})