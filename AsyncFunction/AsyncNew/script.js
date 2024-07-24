

const PrintText = function(text){
    console.log("Hii BhaiLog");
}

const changeText = function(){
    const h1 = document.getElementsByTagName('h1');
    h1[0].innerHTML = "Chalo Bhai Log"
}


const changeMe = setTimeout(changeText,3000);  //  get reference 

document.querySelector('#stop').
addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("Stopped");
})




setTimeout(PrintText,2000);

