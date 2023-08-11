def is_prime(number: int):
    if number < 2:
        return False
    if number == 2:
        return True
    if number % 2 == 0:
        return False
    i = 3
    while i * i <= number:
        if number % i == 0:
            return False
        i += 2
    return True


def get_sum_of_primes(num):
    if num <= 1:
        return 0

    if num == 2:
        return 2

    sum_numbers = 2
    max_prime = num
    prime_candidate = 3
    while prime_candidate < max_prime:
        if is_prime(prime_candidate):
            sum_numbers += prime_candidate

        prime_candidate += 2
    return sum_numbers


# print(get_sum_of_primes(2000000))

# Slieve alg

def SieveOfEratosthenes(n):

    # Create a boolean array
    # "prime[0..n]" and initialize
    #  all entries it as true.
    # A value in prime[i] will
    # finally be false if i is
    # Not a prime, else true.
    prime = [True for i in range(n+1)]
    p = 2
    sum = 0
    while (p * p <= n):

        # If prime[p] is not
        # changed, then it is a prime
        if (prime[p] == True):

            # Update all multiples of p
            for i in range(p * p, n+1, p):
                prime[i] = False
        p += 1
    for p in range(2, n+1):
        if prime[p]:
            sum += p

    return sum


print(SieveOfEratosthenes(2000000))
