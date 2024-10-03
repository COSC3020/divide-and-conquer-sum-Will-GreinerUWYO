# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

We are looking for T(n) = runtime. For our runtime answer, T(n) needs to apply for every n, including the recursive calls.
Each call of the function is calling itself three times, unless the length of the array is one, in which case it is a constant 1. This gives us 3*n. 

But n is also divided into three parts, firstThird, secondThird, and thirdThird. This means that n is only being called a third at a time. So 3T(n/3) is more accurate for runtime. Each section calls the recursive function T(n/3) and this is called three times per loop, so T(n) = 3T(n/3) is the runtime of the function.

The final $\Theta$ complexity is based on the best case situation for this algorithm. Since the only variable is n, the best-case complexity is $\Theta$(n).

________________________________________


I used this GeeksforGeeks site to understand the concept of a divide and conquer function is doing. https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm/ 

I talked to Lily Brongo about how to best split up the function into thirds. She also showed me the +1s that help the code run properly. 

I used this stack overflow page to help me understand how to do runtime anlaysis: https://stackoverflow.com/questions/68149506/how-do-i-analyze-the-running-time-of-an-algorithm-in-c 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
