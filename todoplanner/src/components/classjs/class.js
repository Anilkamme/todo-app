class Marks{
    constructor(eng,maths,science){
        this.eng=eng;
        this.maths=maths;
        this.science;
    }
    total(){
        return this.eng+this.maths+this.science;
    }
    avarage(){
        return total()/3;
    }
}
let Marks1 = new Marks(50,65,70);
console.log(Marks.total());
console.log(Marks.avarage());