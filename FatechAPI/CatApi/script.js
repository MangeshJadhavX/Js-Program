let para = document.querySelector('#para');
let btn = document.querySelector('#button');
const URLlink = "https://dogapi.dog/api/v2/facts" 

//!using then
// promise.then(function(data){
//     console.log(data);
//  return data.json();
// }).then(function(getData){
//     console.log(getData); 
// })

//!using async
async function getData(){
 console.log("getting data.....");
  
 let response = await fetch(URLlink);
 console.log(response);
 //convert to  json;

 let data = await response.json();
 para.innerHTML = data.data[0].attributes.body; 
}



btn.addEventListener('click',getData);











