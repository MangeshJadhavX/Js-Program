
function counter(second){
  console .log(second);  
if(second > 0){
  setTimeout(function(){
   counter(second - 1) // this is call counter function after 1 sec.
  },1000);  

}

}


counter(10);


