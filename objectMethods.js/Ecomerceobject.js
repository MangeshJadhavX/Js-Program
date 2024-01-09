const product = {
    itemName : "T-Shirt",
    price : "2000INR",
    discount : "20%",
    itemCode : "12283893 "
}

//?this a factory function
// function createProduct(name,price,discount,itemCode){   
// return {
//     itemName : name,
//     price : price,
//     discount : discount,
//     itemCode : itemCode
// }

// }

// const footBall = createProduct("Fottball",2000,20,"AFC3535"); 

// we solve this  another method 

function Product(name,price,discount,itemCode){  // this a constructer function //todo Product is written in pascal case
    this.itemName = name,
    this.price = price,
    this.discount = discount,
    this.itemCode = itemCode
    this.discountPrice = function(){  //   function string boolean
        return price * discount / 100; // this is discount of 20%
    }
}


const mobile = new Product("onePlus9r",39999,20,"FTAR17223"); // create a new  object
console.log(mobile);

console.log(mobile.discountPrice()); 

