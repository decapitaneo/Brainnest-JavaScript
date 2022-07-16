/* a. Write a JavaScript program to find the diagonal of a square where the length of each
side is 9 */

function diagonal(s) {
    return Math.sqrt(2) * s
}

console.log(diagonal(9))

/* b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7. 
*/

function calcTriangleArea(side1, side2, side3) {
    // this is the semi-perimeter
    let s = (side1 + side2 + side3) / 2

    let area = s * (s - side1) * (s - side2) * (s - side3)
    return area
}
console.log(calcTriangleArea(5,6,7))

/* c. Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.
## Math.PI representa a proporção entre circunferência de um círculo com o seu diâmetro, aproximadamente 3.14159: */

function circleCircunference(r){
    return 2 * Math.PI * r
}

function circleArea(r){
    return Math.PI * (r*r)
}
console.log(circleCircunference(4))
console.log(circleArea(4))