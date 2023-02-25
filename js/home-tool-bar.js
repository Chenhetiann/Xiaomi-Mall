let items = document.querySelectorAll('.home-tool-bar-item')
let img_static = document.querySelectorAll('.static')
let img_hover = document.querySelectorAll('.hover')
let texts = document.querySelectorAll('.text')

for(let i = 0; i < items.length; i++){
    items[i].onmouseover = function(){
        console.log('鼠标进来了');
        img_static[i].style.opacity = '0';
        img_hover[i].style.opacity = '1';
        texts[i].style.color = '#FF6700';
    }

    items[i].onmouseout = function(){
        console.log('鼠标出去了');
        img_static[i].style.opacity = '1';
        img_hover[i].style.opacity = '0';
        texts[i].style.color = '#757575';
    }
}