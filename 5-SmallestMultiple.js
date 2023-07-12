{
  /* <p>$2520$ is the smallest number that can be divided by each of the numbers from $1$ to $10$ without any remainder.</p>
<p>What is the smallest positive number that is <dfn class="tooltip">evenly divisible<span class="tooltiptext">divisible with no remainder</span></dfn> by all of the numbers from $1$ to $20$?</p>
 */
}

// My Solution:

function largestPrimeFactor(number) {
  let largestPrime = 2;

  while (number % 2 === 0) {
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      largestPrime = i;
      number /= i;
    }
  }
  if (number > 2) {
    largestPrime = number;
  }
  return largestPrime;
}

const getSmallestMultiple = (max) => {
  let desiredNumber = 6;
  for (i = 3; i <= max; i++) {
    if (desiredNumber % i !== 0) {
      desiredNumber = largestPrimeFactor(i) * desiredNumber;
    }
  }

  return desiredNumber;
};

console.log(getSmallestMultiple(16));

// CHATGPT solution

function gcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function chatgpt4Solution(max) {
  let lcm = 1;
  for (let i = 2; i <= max; i++) {
    lcm = (lcm * i) / gcd(lcm, i);
  }
  return lcm;
}

console.log(chatgpt4Solution(16));



