{
  /* <p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
<p>What is the largest prime factor of the number $600851475143$?</p>

 */
}

// My solution is O(n)

let primeArrays = [];

function functionGetMultiplication(n) {
  for (i = 2; i <= n; i++) {
    let x = n % i;

    if (x === 0 && i !== n) {
      const result = n / i;
      primeArrays.push(i);
      functionGetMultiplication(result);
      return;
    }
    if (x === 0 && i === n) {
      return primeArrays.push(i);
    }
  }
}

functionGetMultiplication(600851475143);
console.log(Math.max(...primeArrays));

/// Chatgpt solution O(sqrt(N) )

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

const givenNumber = 600851475143;
const result = largestPrimeFactor(givenNumber);
console.log(`The largest prime factor of ${givenNumber} is ${result}`);
