// Chatgpt4 made this solution I didn't understand it at all. I need to study it more.

function findLargestPalindrome(n) {
  let maxPalindrome = 0;
  for (let i = n; i > 99; i--) {
    for (let j = i; j > 99; j--) {
      let product = i * j;
      if (product < maxPalindrome) {
        break;
      }
      if (
        product.toString() === product.toString().split("").reverse().join("")
      ) {
        maxPalindrome = product;
        console.log(i, j);
      }
    }
  }
  return maxPalindrome;
}

console.log(findLargestPalindrome(999));
