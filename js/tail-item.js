let tail_items = document.querySelectorAll('.tail-item')
let tail_img_static = document.querySelectorAll('.tail-static')
let tail_img_hover = document.querySelectorAll('.tail-hover')
let tail_texts = document.querySelectorAll('.tail-text')

for(let i = 0; i < tail_items.length; i++){
    tail_items[i].onmouseover = function(){
        console.log('鼠标进来了');
        tail_img_static[i].style.opacity = '0';
        tail_img_hover[i].style.opacity = '1';
        tail_texts[i].style.color = '#FF6700';
    }

    tail_items[i].onmouseout = function(){
        console.log('鼠标出去了');
        tail_img_static[i].style.opacity = '1';
        tail_img_hover[i].style.opacity = '0';
        tail_texts[i].style.color = '#616161';
    }
}