var arr = [
    {name : "Mangesh Jadhav", img :"https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", status : "Stranger"},
    {name : "Mayara Sharma", img :"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", status : "Stranger"},
    {name : "Rajveer Singh", img :"https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBvcnRyYWl0fGVufDB8fDB8fHww", status : "Stranger"}
]

function print () {
    var clutter = "";

arr.forEach(function(val,index){
   clutter += ` <div class="card">
   <div class="image">
   <img src= "${val.img}">
   </div>
    <h3>${val.name}</h3>
    <h5>${val.status}</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt nobis dicta neque.</p>
     <button id = "${index}" >Add Friend</button>          
</div>`;   
})


document.querySelector(".main").innerHTML = clutter;
}

print ();

document.querySelector(".main")
   .addEventListener("click",function(details){
    arr[details.target.id].status = "Friend";
    print();
   })