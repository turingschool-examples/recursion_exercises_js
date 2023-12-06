const { expect } = require("chai");
const {
  countdown,
  getSum,
  factorial,
  reverse,
  power,
  isPalindrome,
  upcase,
  sumOfDigits,
  inStock,
  findMax,
  numberOfZeroes,
  justPositives,
  numberOfOccurrences,
  fibonacci,
} = require("../lib/recursion");

describe("Recursion", function () {
  context("Lesson Exercises", function () {
    describe.skip(".countdown", function () {
      it("counts down to zero from the inputted number", function () {
        expect(countdown(0)).to.deep.equal([0]);
        expect(countdown(1)).to.deep.equal([1, 0]);
        expect(countdown(3)).to.deep.equal([3, 2, 1, 0]);
        expect(countdown(-1)).to.deep.equal([0]);
      });
    });

    describe.skip(".getSum", function () {
      it("returns the sum of all the numbers in the array", function () {
        expect(getSum([])).to.be.null;
        expect(getSum([0])).to.equal(0);
        expect(getSum([3])).to.equal(3);
        expect(getSum([-5])).to.equal(-5);
        expect(getSum([1, 2, 3, 4])).to.equal(10);
        expect(getSum([-80, 34, 7])).to.equal(-39);
      });
    });

    describe.skip(".factorial", function () {
      it("returns the product of all positive integers less than or equal to n", function () {
        // 5! => 5 * 4 * 3 * 2 * 1 = 120

        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(2)).to.equal(2);
        expect(factorial(3)).to.equal(6);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });
    });

    describe.skip(".reverse", function () {
      it("returns the string in reversed order", function () {
        expect(reverse("")).to.equal("");
        expect(reverse(" ")).to.equal(" ");
        expect(reverse(",.?!")).to.equal("!?.,");
        expect(reverse("a")).to.equal("a");
        expect(reverse("ab")).to.equal("ba");
        expect(reverse("abc")).to.equal("cba");
        expect(reverse("ABC")).to.equal("CBA");
      });
    });

    describe.skip(".power", function () {
      it("returns a number to a specific power", function () {
        // power(base, exponent) # 2 to the 4th power => 2 * 2 * 2 * 2 = 16

        expect(power(2, 0)).to.equal(1);
        expect(power(2, 1)).to.equal(2);
        expect(power(2, 2)).to.equal(4);
        expect(power(2, 3)).to.equal(8);
        expect(power(2, 4)).to.equal(16);
        expect(power(3, 0)).to.equal(1);
        expect(power(3, 1)).to.equal(3);
        expect(power(3, 2)).to.equal(9);
        expect(power(3, 3)).to.equal(27);
        expect(power(3, 4)).to.equal(81);
      });
    });

    describe.skip(".isPalindrome", function () {
      it("returns true/false for whether the given input is a palindrome", function () {
        // A palindrome is word/number that reads the same forwards and backwards. Examples include racecar, tacocat, and toot.

        expect(isPalindrome("")).to.be.true;
        expect(isPalindrome("a")).to.be.true;
        expect(isPalindrome("racecar")).to.be.true;
        expect(isPalindrome("tacocat")).to.be.true;
        expect(isPalindrome("toot")).to.be.true;
        expect(isPalindrome("library")).to.be.false;
        expect(isPalindrome("dngojkafnghkoasng")).to.be.false;
      });
    });
  });

  context("Additional Practice", function () {
    describe.skip(".upcase", function () {
      it("returns the string with all characters capitalized", function () {
        expect(upcase("")).to.equal("");
        expect(upcase(" ")).to.equal(" ");
        expect(upcase(",.?!")).to.equal(",.?!");
        expect(upcase("a")).to.equal("A");
        expect(upcase("A")).to.equal("A");
        expect(upcase("abc")).to.equal("ABC");
        expect(upcase("Abc")).to.equal("ABC");
      });
    });

    describe.skip(".sumOfDigits", function () {
      it("returns the sum of all numbers from 1 to n (inclusive n)", function () {
        expect(sumOfDigits(5)).to.equal(15);
        expect(sumOfDigits(1)).to.equal(1);
        expect(sumOfDigits(9)).to.equal(45);
        expect(sumOfDigits(-8)).to.be.null;
      });
    });

    describe.skip(".inStock", function () {
      it("returns true/false for whether or not the shop offers the target ice cream flavor", function () {
        expect(inStock(["vanilla", "strawberry"], "blue moon")).to.be.false;
        expect(inStock(["pistachio", "green tea", "chocolate", "mint chip"], "green tea")).to.be.true;
        expect(inStock(["cookies n cream", "blue moon", "superman", "honey lavender", "sea salt caramel"], "pistachio")).to.be.false;
        expect(inStock(["moose tracks"], "moose tracks")).to.be.true;
        expect(inStock([], "honey lavender")).to.be.false;
      });
    });

    context("Slightly More Challenging Problems", function () {
      describe.skip(".findMax", function () {
        it("returns the max element in the array", function () {
          expect(findMax([])).to.be.null;
          expect(findMax([8])).to.equal(8);
          expect(findMax([8, 3, 5, 1, 9])).to.equal(9);
          expect(findMax([8, 3, 5, 1, 9, 4, 7, 2, 10, 6])).to.equal(10);
        });
      });

      describe.skip(".numberOfZeroes", function () {
        it("returns the number of zeroes in the array", function () {
          expect(numberOfZeroes([])).to.equal(0);
          expect(numberOfZeroes([5, 5, 5])).to.equal(0);
          expect(numberOfZeroes([5, 0, 0])).to.equal(2);
          expect(numberOfZeroes([0, 0, 5])).to.equal(2);
          expect(numberOfZeroes([5, 0, 3, 6, 0, 3, 0, 0])).to.equal(4);
          expect(numberOfZeroes([0, 0, 0, 0, 0, 0, 0, 0])).to.equal(8);
        });
      });

      describe.skip(".justPositives", function () {
        it("returns the sum of all the positive integers", function () {
          expect(justPositives([])).to.equal(0);
          expect(justPositives([-1])).to.equal(0);
          expect(justPositives([0])).to.equal(0);
          expect(justPositives([3, 6, 7, -1, -5, 0, 9])).to.equal(25);
          expect(justPositives([-1, 3, 6, 7, -1, -5, 0, 9])).to.equal(25);
        });
      });

      describe.skip(".numberOfOccurrences", function () {
        it("returns the number of occurrences of the target in the array", function () {
          expect(numberOfOccurrences([], "a")).to.equal(0);
          expect(numberOfOccurrences([], 1)).to.equal(0);
          expect(numberOfOccurrences(["a", "b", "r", "a", "k", "a", "d", "a", "b", "r", "a"], "a")).to.equal(5);
          expect(numberOfOccurrences(["a", "b", "r", "a", "k", "a", "d", "a", "b", "r", "a"], "b")).to.equal(2);
          expect(numberOfOccurrences(["a", "b", "r", "a", "k", "a", "d", "a", "b", "r", "a"], "z")).to.equal(0);
          expect(numberOfOccurrences(["a", "b", "r", "a", "k", "a", "d", "a", "b", "r", "a"], 1)).to.equal(0);
          expect(numberOfOccurrences([1, 2, 18, 1, 11, 1, 4, 1, 2, 18, 1], 1)).to.equal(5);
        });
      });
    });

    context("Challenging Problems", function () {
      describe.skip(".fibonacci", function () {
        it("returns the nth number in the Fibonacci sequence", function () {
          // The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It starts with 0 and 1, and the sequence goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
          
          expect(fibonacci(0)).to.equal(0);
          expect(fibonacci(1)).to.equal(1);
          expect(fibonacci(2)).to.equal(1);
          expect(fibonacci(3)).to.equal(2);
          expect(fibonacci(4)).to.equal(3);
          expect(fibonacci(5)).to.equal(5);
          expect(fibonacci(6)).to.equal(8);
          expect(fibonacci(7)).to.equal(13);
        });
      });
    });
  });
});
