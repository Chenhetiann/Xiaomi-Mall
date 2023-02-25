//content
{
    function content(parent) {


        let types = parent.querySelectorAll(".container span");
        let goods = parent.querySelectorAll(".goods");

        types.forEach(function (ele, index) {
            ele.onmouseenter = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("activity");
                    goods[i].classList.remove("home-box-change");
                }
                this.classList.add("activity");
                goods[index].classList.add("home-box-change");
            }
        })
    }

    contentList = document.querySelectorAll(".container");
    contentList.forEach(function (ele) {
        content(ele);
    });
}