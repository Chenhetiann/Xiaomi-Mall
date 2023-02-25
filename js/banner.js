// 轮播图
let imgs = document.querySelectorAll(".imgshow a")
let points = document.querySelectorAll(".points a")
let btns = document.querySelectorAll(".btn")
let nowIndex = 0
let timer = null

function hiddenImages() {
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"
    }
}

function hiddenPoints() {
    for(let i = 0; i < points.length; i++) {
        points[i].className = "hidden"
    }
}

function changeAll() {
    hiddenImages()
    hiddenPoints()
    imgs[nowIndex].style.display = "block"
    points[nowIndex].className = "show"
}

function bannerPlay() {
    timer = setInterval(function() {
        changeAll()
        nowIndex++
        if(nowIndex >= imgs.length) {
            nowIndex = 0
        }
    },3000)
}
bannerPlay()

for (let i = 0; i < points.length; i++) {
    points[i].onmouseover = function() {
        clearInterval(timer)
    }
    points[i].onmouseout = function() {
        bannerPlay()
    }

    points[i].index = i
    points[i].onclick = function() {
        nowIndex = this.index
        changeAll()
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].onmouseover = function() {
        clearInterval(timer)
    }
    btns[i].onmouseout = function() {
        bannerPlay()
    }      
}

btns[0].onclick = function( ) {
    nowIndex--
    if ( nowIndex < 0){
        nowIndex = points.length - 1
    }
    changeAll()
}

btns[1].onclick=function( ) {
    nowIndex++
    if ( nowIndex > points.length - 1){
        nowIndex = 0
    }
    changeAll()
}