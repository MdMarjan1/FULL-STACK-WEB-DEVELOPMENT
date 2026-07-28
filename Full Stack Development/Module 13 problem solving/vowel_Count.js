// vowel count with for of loop
function isVowel(letter) {
  let vowels = 'aeiou';
  let count = 0;
  for (let i of letter) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count
}
console.log(isVowel('programming Hero'));
