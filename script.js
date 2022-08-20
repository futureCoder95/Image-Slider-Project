let flag = 0;

//This function is to increment & decrement the specific image when we click on the arrow buttons......
function controller(x) {
    flag = flag + x;
    slideShow(flag)
}

function slideShow(num) {
    let slides = document.getElementsByClassName("slide");

    //agar num == last image hojae to num or flag ko zero krdo......
    if (num == slides.length) {
        num = 0;
        flag = 0;
    }
    //agar num zero se kam ho to slides ki length ko 1 se minus krdo ...
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }

    // ye for loop isliye lagaya kyoki image change krne par dusri image theek uske niche aa rhi thi -------->
    for (const i of slides) {
        i.style.display = "none"
    }
    slides[num].style.display = "block"
}

slideShow(flag);
