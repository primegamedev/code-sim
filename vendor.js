const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const house = document.getElementById('house')
const descriptions = document.getElementById('descriptions')
const laptop = document.getElementById('laptop')

canvas.width = window.innerWidth
canvas.height = 2*window.innerHeight/3

const numsForAnimation = []


let atHomeScreen = true
let atHouse = false
let animateHomeScreenID

function homeScreenAnimationManager(){
    if(atHomeScreen === true){
        animateHomeScreen()
    }else{
        cancelAnimationFrame(animateHomeScreenID)
        c.fillStyle = 'rgba(0,0,0,1)'
        c.fillRect(0,0,canvas.width, canvas.height)
        numsForAnimation.forEach((num, index) => {
                numsForAnimation.splice(index, 1)
        })
    }
}


function houseAnimationManager(){
    if(atHouse === true){
        
    }
}

class Number{
    constructor(x, y, yvel){
        this.x = x
        this.y = y
        this.yvel = yvel
        this.numberPushed = Math.round(Math.random())
    }
    draw(){
        c.fillStyle = 'rgb(0,255,34)'
        c.font = '30px Ariel'
        c.fillText(this.numberPushed, this.x, this.y)
    }
    update(){
        this.draw()
        this.y += this.yvel
    }
}









