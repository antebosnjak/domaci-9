/* 
2. Napisi funkciju koja ce primiti proizvoljan string kao ulaz. Funkcija ce potom provjeriti jesu li
u tom stringu sve zagrade ispravno napisane. Ukoliko je svaka zagrada zatvorena rezultat funkcije 
ce biti true, ukoliko zagrade nisu ispravno zatvorene rezultat ce biti false.
Primjer 1: 
Input: '(a+b) * (c - d)'
Output: true
Primjer 2: 
Input: '(a+b * (c - d)'
Output: false
Primjer 3: 
Input: '(c * (a+b)) * (x - (y * (c - d)))'
Output: true
*/

function bParity(string) {
  openingBrackets = string.length - string.replaceAll("(", "").length;
  closingBrackets = string.length - string.replaceAll(")", "").length;
  
  return openingBrackets === closingBrackets ? true : false;
}

const str1 = "(a+b) * (c - d)";
const str2 = "(a+b * (c - d)";
const str3 = "(c * (a+b)) * (x - (y * (c - d)))";

console.log(bParity(str1));
console.log(bParity(str2));
console.log(bParity(str3));
