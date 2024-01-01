class animal {
    constructor (name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak() {
        console.log("the animal spack like " + this.speaks);
    }

}

let dog = new animal("dog",4,"bhau bhau");
let cat = new animal("cat",4,"mew mew");

dog.speak();

