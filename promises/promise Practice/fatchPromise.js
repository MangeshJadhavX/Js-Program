
async function getUrlData(){
     try {
        const response =  await fetch('https://jsonplaceholder.typicode.com/users');
        const getResponse = await response.json();       
        getResponse.forEach((user)=>{
        if (user.id == 2) {
           user.address.city = 'NEW YORK'; 
        }
        console.log(user);
        });
        if (user.city == 'NEW YORK') {
              
        }
   
    
     } catch (error) {
        console.log('ERROR 402');
     }

}

getUrlData();