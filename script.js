function query (tag) {
    return document.querySelector(tag)
}

const img = query("img");
let anda = 10;

setInterval(() => {
    if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"

    }else if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"        

    }else if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"

    }
    img.style.marginLeft = anda + "px";
    anda = anda + 15;
}, 400);