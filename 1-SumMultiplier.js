/* 
<p>
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we
    get 3, 5, 6 and 9. The sum of these multiples is 23.
  </p>
  <p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
*/

function SumOfMultiples(multiplier, lastNumber) {
  let firstNumber = multiplier;
  let largestNumber = Math.floor(lastNumber / multiplier) * multiplier;

  return (
    (largestNumber * largestNumber -
      firstNumber * firstNumber +
      multiplier * multiplier +
      multiplier * largestNumber) /
    (2 * multiplier)
  );
}

function EncontrarSumaDeDosMultiplos(multple1, multiple2, list) {
  let sumWithRepetitiveNumbers =
    SumOfMultiples(multple1, list) + SumOfMultiples(multiple2, list);

  let sumOfRepetitiveNumbers = SumOfMultiples(multple1 * multiple2, list);

  return sumWithRepetitiveNumbers - sumOfRepetitiveNumbers;
}

console.log(solutionProblem(3, 5, 9));
