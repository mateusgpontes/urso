function query (tag) {
    return document.querySelector(tag)
}
function andaImg (image, file1, file2, file3) {
    if(image.src == file1){
        image.src = file2
    }
    else if(img.src == file2){
        image.src = file3        
    }
    else if(image.src == file3){
        image.src = file2
    }
} 

const img = query("img");
let anda = 10;

/*setInterval(() => {
    if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"
    }
    else if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"        
    }
    else if(img.src == "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"){
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png"
    }
}, 400);*/


document.addEventListener("keypress", (andar) => {
    if(andar.code == "KeyW"){        
        img.style.marginBottom = anda + "px";
        andaImg(img,"file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"
        );
    }
    else if(andar.code == "KeyD"){
        img.style.marginLeft = anda + "px";
        andaImg(img,"file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"
        );
    }
    else if(andar.code == "KeyS"){
        img.style.marginTop = anda + "px";
        andaImg(img,"file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"
        );
    }
    else if(andar.code == "KeyA"){
        img.style.marginRight = anda + "px";
        andaImg(img,"file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"
        );
    }else{
        img.src = "file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png";
        andaImg(img,"file:///home/mateus/Documents/estudos/javaScript/anima/chara-1.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-2.png",
        "file:///home/mateus/Documents/estudos/javaScript/anima/chara-3.png"
        );
    }

    anda = anda + 15;
});