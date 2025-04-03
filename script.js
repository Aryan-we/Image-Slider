var image=document.querySelector("img");
var images=['img1.png','img2.jpg','img3.jpg','img5.jpg','img6.jpg'];
var i=0;
var l=images.length;
function fun1(){
    if(i>0){
        i=i-1
    }else{
        i=l-1;
    }
    image.src="./images/"+images[i];
}
function fun2(){
    if(i<l-1){
        i=i+1
    }else{
        i=0
    }
    image.style.transition="5s";
    image.src="./images/"+images[i];
}
function fun3(){
    var download=document.querySelector("a");
    download.href="./images/"+images[i];
    download.download="./images/"+images[i];
}