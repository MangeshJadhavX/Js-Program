

function one(){
    let carNAme = "Thar 4X4";
    function two(){
      let companyName = "Mahendra";
      console.log(carNAme);
    }
    // console.log(companyName); //! you cant access children variable on here 
    two();
}

one();