const name = "sojwal"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sojwal-si')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.includes("So"));
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));

console.log(gameName.indexOf('j'));

const newString = gameName.substring(0 , 4); //sojw
console.log(newString);

const another = gameName.slice(-8 , 4) //it will start from 4 // ojw
console.log(another);

const newStringOne = "    hitesh    ";

console.log(newString);
console.log(newStringOne.trim()); //remove starting and ending spaces


const url = "https://sojwal%20ingle.com"

url.replace("%20" , "-")

console.log(url.replace("%20" , "-"));

console.log(url.includes('sojwal'));



let myString  = "sojwal-Ingle-Software Developer";

console.log(myString.split("-")); //[ 'sojwal', 'Ingle', 'Software Developer' ]

/*
String {'Sojwal-si'}
0
: 
"S"
1
: 
"o"
2
: 
"j"
3
: 
"w"
4
: 
"a"
5
: 
"l"
6
: 
"-"
7
: 
"s"
8
: 
"i"
length
: 
9
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
1
name
: 
"lastIndexOf"
arguments
: 
[Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
caller
: 
[Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (<anonymous>:3:28)]
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Sojwal-si"
*/


