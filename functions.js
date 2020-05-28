// Remove Whitespace from Start and End
function removeWhiteSpace(str) {
   let regex = /^\s+|\s+$/g;
   return str.replace(regex, "");
}

// Use Capture Groups to Search and Replace
function captureGroups(str) {
   let Regex = /(\w+)\s(\w+)\s(\w+)/i;
   let moveStr = "$3 $2 $1";
   return str.replace(Regex, moveStr);
}

// Check For Mixed Grouping of Characters
function mixGroups(str) {
   let regex = /(Eleanor|Franklin).*Roosevelt/;
   return regex.test(str);
}

// Positive and Negative Lookahead
function Lookahead(str) {
   // ^ carat applies to the beginning
   // \D matches any character thats not a digit
   //first look ahead is checking to see if its at least 5 charaters long \w equals any number or letter Aa-Zz
   // second look ahead uses * to match between 0- unlimited times
   //  \d matches a digit and specifies how many times
   let regex = /^\D(?=\w{5})(?=\w*\d{2})/;
   return regex.test(str);
}

// Match Non-Whitespace Characters
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters
function matchNonSpace(str) {
   let nonWhiteSpaceRegex = /\S/gi;
   return str.match(nonWhiteSpaceRegex).length;
}

// Match All Non-Numbers
function matchNonNums(str) {
   let nonNumRegex = /\D/gi;
   return str.match(nonNumRegex);
}

// Match All Numbers
function matchNums(nums) {
   let numRegex = /\d/gi;
   return nums.match(numRegex);
}

// Match Everything But Letters and Numbers
function noLettersOrNums(str) {
   let noLetterRegex = /\W/gi;
   return str.match(noLetterRegex);
}

// Match All Letters and Numbers
function matchEverything(str) {
   let matchRegex = /\w/gi;
   return str.match(matchRegex).length;
}

// Match Beginning String Patterns
function matchTheEnd(str) {
   let endRegex = /edward$/i;
   return str.match(endRegex);
}

// Match Beginning String Patterns
function matchTheFront(str) {
   let regex = /^edward/;
   return str.match(regex);
}
// Find One or More Criminals in a Hunt
function findCriminals(crime) {
   let crimeRegex = /C+/gi;
   return crime.match(crimeRegex);
}

//Match Characters that Occur One or More Times
function multipleMatches(str) {
   let matchRegex = /s+/gi;
   return str.match(matchRegex);
}

//Match Single Characters Not Specified
function notSpecified(str) {
   let charRegex = /[^aeiou]/gi;
   return str.match(charRegex);
}

//Match Single Character with Multiple Possibilities
function multiPoss(str) {
   let charRegex = /[aeiou]/gi;
   return str.match(charRegex);
}

// Match literal Strings
function matchStrings(str, value) {
   // let testStr = str;
   let regex = new RegExp(value);
   return regex.test(str);
}
