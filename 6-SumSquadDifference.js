{
  /* <p>The sum of the squares of the first ten natural numbers is,</p>
$$1^2 + 2^2 + ... + 10^2 = 385.$$
<p>The square of the sum of the first ten natural numbers is,</p>
$$(1 + 2 + ... + 10)^2 = 55^2 = 3025.$$
<p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
<p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p> */
}

const sumNatural = (n) => {
  return (Math.pow(n, 2) + n) / 2;
};

const sumOfSquares = (n) => {
  let value = 0;

  for (let i = 1; i <= n; i++) {
    value = value + Math.pow(i, 2);
  }

  return value;
};

const differentBetweenSumOfSquares = (n) => {
  return Math.pow(sumNatural(n), 2) - sumOfSquares(n);
};

console.log(differentBetweenSumOfSquares(100)); // outputs 25164150

// chatgpt4 solution
// The sum of the squares of the first n natural numbers is given by the formula n*(n+1)*(2n+1)/6.
// That formula is made using mathematical induction doesn't necesarry come from the problem

const sumNaturalC = (n) => {
  return (n * (n + 1)) / 2;
};

const sumOfSquaresC = (n) => {
  return (n * (n + 1) * (2 * n + 1)) / 6;
};

const differentBetweenSumOfSquaresC = (n) => {
  return Math.pow(sumNatural(n), 2) - sumOfSquares(n);
};

console.log(differentBetweenSumOfSquaresC(100)); // Outputs: 25164150
