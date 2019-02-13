let radius = 4;
let side = 4;
let triHeight = 4;
let triBase = 4;


function getAreaOfCircle (radius){
    let area = ("The Area of the Circle: " + (3.1415 * (radius * radius)));
    return area;
}
function getCircumferenceOfCircle(radius){
    let area2 = ("The circumference is: " + (2 * 3.1415 * radius));
    return area2;
}
function getAreaOfSquare(side){
    let area3 = ("The area of the square is: " + (side * side));
    return area3;
}
function getAreaOfTriangle(triHeight, triBase){
    let area4 = ("the area of the Triangle is: " + ((triHeight * triBase) / 2));
    return area4;
}
console.log("If the radius of a circle is: " + radius);
console.log(getAreaOfCircle(radius));
console.log(getCircumferenceOfCircle(radius));
console.log("If the one side of a square is: " + side);
console.log(getAreaOfSquare(side));
console.log("If the triangle Height is: " + triHeight + " and the triangle Base is: " + triBase);
console.log(getAreaOfTriangle(triHeight, triBase));
    