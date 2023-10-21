""" <p>The following iterative sequence is defined for the set of positive integers:</p>
<ul style="list-style-type:none;">
<li>$n \to n/2$ ($n$ is even)</li>
<li>$n \to 3n + 1$ ($n$ is odd)</li></ul>
<p>Using the rule above and starting with $13$, we generate the following sequence:
$$13 \to 40 \to 20 \to 10 \to 5 \to 16 \to 8 \to 4 \to 2 \to 1.$$</p>
<p>It can be seen that this sequence (starting at $13$ and finishing at $1$) contains $10$ terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at $1$.</p>
<p>Which starting number, under one million, produces the longest chain?</p>
<p class="note"><b>NOTE:</b> Once the chain starts the terms are allowed to go above one million.</p>
 """


def is_odd_sequence(n):
    return 3*n + 1


def is_even(n):
    return n/2


def iterative_sequence(n, current_streak):
    if n == 1:
        return current_streak
    current_streak += 1
    if n % 2 == 0:
        return iterative_sequence(is_even(n), current_streak)

    else:
        return iterative_sequence(is_odd_sequence(n), current_streak)


def hightest_number():
    highest = 0
    highest_number = 0
    for i in range(1, 30):
        value = iterative_sequence(i, 1)
        print(value)
        if value > highest:
            highest_number = i
            highest = value

    return highest_number


# print(hightest_number())


# ChatGPT way

def collatz_length(n, memo={}):
    if n in memo:
        return memo[n]
    if n == 1:
        return 1
    if n % 2 == 0:
        next_n = n // 2
    else:
        next_n = 3 * n + 1
    length = 1 + collatz_length(next_n, memo)
    memo[n] = length
    return length


def highest_number_gpt(limit=1000000):
    highest = 0
    highest_number = 0
    for i in range(1, limit):
        value = collatz_length(i)
        if value > highest:
            highest_number = i
            highest = value
    return highest_number


print(highest_number_gpt())
