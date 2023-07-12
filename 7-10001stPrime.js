/* <!-- <p>By listing the first six prime numbers: $2, 3, 5, 7, 11$, and $13$, we can see that the $6$th prime is $13$.</p>
<p>What is the $10\,001$st prime number?</p>
 -->

  */

function isPrime(number) {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumber(number) {
  let stPrimeNumber = number - 2;
  let curentNumber = 3;

  while (stPrimeNumber > 0) {
    if (isPrime(curentNumber + 2)) {
      curentNumber += 2;
      stPrimeNumber -= 1;
      continue;
    }

    curentNumber += 2;
  }

  return curentNumber;
}

// console.log(getPrimeNumber(10001)); // 104743

// chatGpt solution

function isPrimeChat(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumberChat(number) {
  if (number < 1) return null;
  if (number === 1) return 2;
  let count = 1; // we start counting from 2
  let candidateForPrime = 3;
  while (count < number) {
    if (isPrimeChat(candidateForPrime)) {
      count++;
    }
    candidateForPrime += 2;
  }
  return candidateForPrime - 2;
}

console.log(getPrimeNumberChat(10001));
