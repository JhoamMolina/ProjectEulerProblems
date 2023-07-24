{
  /* <p>A Pythagorean triplet is a set of three natural numbers, $a \lt b \lt c$, for which,
$$a^2 + b^2 = c^2.$$</p>
<p>For example, $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.</p>
<p>There exists exactly one Pythagorean triplet for which $a + b + c = 1000$.<br>Find the product $abc$.</p>
 */
}

// I solved this without programming just by trial and error. First I clear c. So i could put in the equation after I just did some trial and error
// knowing that a < b.

function calculateProduct(a, b) {
  console.log(a + b + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}

calculateProduct(200, 375);
425;

40000;

140625;
