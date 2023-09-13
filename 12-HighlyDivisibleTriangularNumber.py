# This was my try. I didn't optimize it and at the end it was way to inneficent.

""" import math


def get_triangular_number(triangular_number, last_value=0):

    value = last_value + triangular_number

    return value


def divisibleNumbers():
    divisibles_numbers = []
    triangular_number = 0
    triangular_number_value = 0

    while len(divisibles_numbers) <= 500:
        triangular_number += 1
        divisibles_numbers = []
        triangular_number_value = get_triangular_number(
            triangular_number, triangular_number_value)
        divisibles_numbers.append(triangular_number_value)
        rounded_sqrt = int(math.ceil(triangular_number_value / 2))

        if triangular_number_value % 2 != 0:
            continue

        for i in range(1, rounded_sqrt + 1):
            if triangular_number_value % i == 0:
                divisibles_numbers.append(i)
        print(len(divisibles_numbers))

    print(divisibles_numbers)
    print(triangular_number_value)


divisibleNumbers()
 """


# With CHATPGT help I realized there is a mathematical property that allows to improve my code by doing the following
# If n is divislbe by x, then n is also divisible n/x
# This means the following
# Consider n = 100
# The divisors for this number are 1, 2,4,5,10,20,25, 50,100
# Check this
# 1 x 100 == 100
# 2 x 10 == 100
# 4 x 25 == 100
# 5 x 20 == 100
# 10 x 10 == 100
# This way we can see that they meet in the meeting so we dont actually need to check for all the numbers we can loop only till the square of N
# Finally if n is a perfect square (n = x . x ) we need to decrease the count by 2 or the coe will count it twice.

import math


def count_divisors(n):
    count = 0
    sqrt_n = int(math.sqrt(n))

    for i in range(1, sqrt_n + 1):
        if n % i == 0:
            count += 2  # i and n/i
    if sqrt_n * sqrt_n == n:
        count -= 1  # if n is a perfect square
    return count


def divisibleNumbers():
    n = 1
    while True:
        triangular_number = n * (n + 1) // 2  # n*(n+1)/2

        # count divisors considering that n and n+1 are co-prime
        if n % 2 == 0:
            cnt = count_divisors(n // 2) * count_divisors(n + 1)
        else:
            cnt = count_divisors(n) * count_divisors((n + 1) // 2)

        if cnt > 500:
            print("Triangular number:", triangular_number)
            print("Divisors:", cnt)
            return

        n += 1


divisibleNumbers()
