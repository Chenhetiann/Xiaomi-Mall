let items_more = document.querySelectorAll('.more-link')
let img_static_more = document.querySelectorAll('.more-static')
let img_hover_more = document.querySelectorAll('.more-hover')
let texts_more = document.querySelectorAll('.text-more')

for(let i = 0; i < items_more.length; i++){
    items_more[i].onmouseover = function(){
        console.log('鼠标进来了');
        img_static_more[i].style.opacity = '0';
        img_hover_more[i].style.opacity = '1';
        texts_more[i].style.color = '#FF6700';
    }

    items_more[i].onmouseout = function(){
        console.log('鼠标出去了');
        img_static_more[i].style.opacity = '1';
        img_hover_more[i].style.opacity = '0';
        texts_more[i].style.color = '#757575';
    }
}