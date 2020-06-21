class Circle{
    constructor(radius){
        this.radius = radius ;
    }
    getDiameter(){
        let diameter = this.radius * 2 ;
        return diameter;

    }
    getCircumference(){
        let circumference = this.radius * 2 * Math.PI;
        return circumference;
    }
    getArea(){
        let area = this.radius * this.radius * Math.PI;
        return area;
    }
}
let c1 = new Circle(10);

console.log(`C1 : diameter ${c1.getDiameter()} , circumference ${c1.getCircumference()} area ${c1.getArea()} `);