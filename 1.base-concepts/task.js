"use strict"

function solveEquation(a, b, c) {

  let arr = [];
  let discriminant = b ** 2 - (4 * a * c);

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let percentPerMonth = percent / 12 / 100;
  let creditBody = amount - contribution;
  let paymentPerMonth = creditBody * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));

  return +(paymentPerMonth * countMonths).toFixed(2);
  
}
