const isPalindrome = (str) => {
  const cleanedStr = str
    .toLowerCase()
    .match(/[a-z0-9]/g)
    .join("");
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("Was it a car or a cat i saw?"));
console.log(isPalindrome("A Santa at Nasa?!!!!"));
console.log(isPalindrome("Hello, World!")); //
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));

/*
Simply stated, the function does the following:
1. "Cleanup" the string.
  - Converts the string to lowercase
  - Removes any non-alphanumeric characters
  - join() method is used to join the cleaned characters back into a string
  2. Checks if the cleaned string is equal to its reverse
  - The string is split into an array of characters
  - The array is reversed
  - The reversed array is joined back into a string
  - The cleaned string is compared with its reverse
  - If they are equal, the function returns true; otherwise, it returns false
  */
