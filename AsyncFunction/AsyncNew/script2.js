

const PrintNumbers = function(Str){
    console.log(Str,Math.floor(Math.random() * 100 + 1));       
}


document.querySelector('#start').addEventListener('click',function(){
    const stopInterval = setInterval(PrintNumbers,1000,"h1");


    document.querySelector('#stop').
    addEventListener('click',function(){
        clearInterval(stopInterval);
    })

})





