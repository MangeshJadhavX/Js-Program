
const RequestUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.open("GET", RequestUrl); //parameter Method & String

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(data);

    const div = document.createElement("div");
    const btn = document.createElement('button');
    div.innerHTML = `<div class ="card">
       <img src="${data.avatar_url}" alt="">

       </div>`;
      
        
       document.body.append(div);
       btn.setAttribute('class' , 'followBtn');
       div.appendChild(btn);
      
       btn.innerHTML = 'follower'
     const getFollower = document.querySelector('.followBtn');
     
     let flag = 1
     getFollower.addEventListener('click',function(){
        if (flag == 1) {
            btn.innerHTML = `<p>${data.followers}</p>`
            flag = 0;
        }
        else{
            btn.innerHTML = 'follower'
            flag = 1; 
        }
     })
       
  }
};




xhr.send();
