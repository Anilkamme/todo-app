class Marks{
    constructor(eng,maths,science){
        this.eng=eng;
        this.maths=maths;
        this.science=science;
    }
    total(){
        return this.eng+this.maths+this.science;
    }
    avarage(){
        return this.total()/3;
    }
}
let Marks1 = new Marks(50,65,70);
console.log(Marks1.total());
console.log(Marks1.avarage());