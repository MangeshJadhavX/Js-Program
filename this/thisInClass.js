class MyClass {
    constructor(value) {

      // value is defined in the enclosing lexical context of the constructor
      this.value = value; // accessing and initializing a property of the class instance
    //   console.log(this);
    }
  
    getValue() {
        console.log(this);
      return this.value; // accessing the property within a class method
    
    }
  }
  
  const myInstance = new MyClass(42);
  console.log(myInstance.getValue()); // Output: 42
  