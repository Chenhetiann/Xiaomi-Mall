let label = document.querySelectorAll(".nav-list li");
let menus = document.querySelectorAll(".nav-bottom");
let obj = menus[0];

label.forEach(function (ele,index) {
    ele.onmouseenter=function () {
        menus[index].style.borderTop="1px solid #afafaf";
        menus[index].style.height="230px";
        obj=menus[index];
    }
    ele.onmouseleave=function () {
        menus[index].style.height="0px";
        menus[index].style.borderTop="";

    }
})