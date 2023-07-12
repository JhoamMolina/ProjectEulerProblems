{
  /* <p>Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:</p>
<p class="center">1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</p>
<p>By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</p>
 */
}

// my shitty way

function fibo(i) {
  if (i === 0) {
    return 1;
  }
  if (i === 1) {
    return 1;
  }
  let total = fibo(i - 1) + fibo(i - 2);

  return total;
}

function sumFibonacci(maxLimit) {
  let sum = 0;
  let flag = false;

  for (i = 2; sum < maxLimit && flag === false; i = i + 3) {
    let a = fibo(i);
    if (a > maxLimit) {
      flag = true;
    } else {
      sum += a;
    }
  }

  return sum;
}

// best answer from euler way

function SumFibo(MaxNumber) {
  const goldenRatioBy3 = Math.pow(1.6180339887, 3);

  let sum = 2;
  let currentFibo = 2;

  while (sum < MaxNumber) {
    const fiboNumber = Math.round(currentFibo * goldenRatioBy3);
    currentFibo = fiboNumber;
    sum += currentFibo;
  }

  return sum;
}

// Chat gpt way

function sumEvenFibonacci(maxValue) {
  let prev = 1;
  let current = 2;
  let sum = 2;

  while (current <= maxValue) {
    let next = prev + current;

    if (next % 2 === 0) {
      sum += next;
    }

    prev = current;
    current = next;
  }

  return sum;
}

const maxLimit = 4000000;

console.log(sumEvenFibonacci(maxLimit));
console.log(sumFibonacci(maxLimit));
console.log(SumFibo(maxLimit));
