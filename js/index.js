// Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1 = "John"
const hacker2 = "Wick"
const longitud = ""

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if  ( hacker1.length >   hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker2.length <   hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else if (hacker2.length || hacker1.length == longitud.length)
{
    console.log(` Wow, you both have equally long names, ${longitud.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let nombre = ""
let letra = ""
for (const letra of hacker1) {
    nombre += letra.toUpperCase();
  }
console.log(nombre);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let nombre2= ""
for (let i=hacker2.length - 1; i >= 0; i--) { //recorre el bucle del revés desde la longitud del nombre
    nombre2 += hacker2[i];                        // es igual que nombre = nombre +
  }
  console.log(nombre2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?



// Bonus 1:
// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor neque, consectetur ut porta id, pulvinar ac sem. Aliquam velit augue, ullamcorper at faucibus quis, molestie eget ipsum. Praesent varius neque tempus, dignissim turpis ut, rhoncus lectus. Vestibulum auctor in massa non rhoncus. Nulla id accumsan nibh. Nam venenatis enim sit amet sem laoreet luctus. Phasellus lacus urna, maximus ac rutrum non, lacinia pulvinar justo. Nulla at risus vel ante aliquet tincidunt non in nunc. Ut malesuada orci eu lacus ultricies scelerisque. Quisque blandit condimentum nibh et accumsan.

Maecenas sit amet gravida tellus. Aenean pellentesque sagittis tortor. Nulla facilisi. Cras pulvinar neque neque, ac vestibulum eros auctor vulputate. Nunc sit amet dui ultrices, gravida urna ut, pulvinar neque. Curabitur interdum quam ut dolor ultrices, sed dictum mauris posuere. Sed ullamcorper vel massa ut tempor. Phasellus malesuada ac arcu at feugiat. Nullam sodales tristique eros et euismod. Morbi cursus et nisi nec euismod. Nulla laoreet, nisi a pharetra tincidunt, metus risus consequat velit, euismod porta massa nibh vitae nibh. Morbi non lorem non libero mollis laoreet.

Morbi posuere sapien vitae nunc viverra dapibus et vel nisi. Nullam eleifend quam et neque feugiat iaculis. Maecenas eu massa semper leo feugiat accumsan in pulvinar sem. Etiam eu finibus mi. Maecenas luctus efficitur orci, et interdum neque aliquet vel. Maecenas scelerisque libero ultrices, malesuada ante non, condimentum lectus. Vestibulum id ornare arcu. Maecenas a lacinia urna, vitae egestas augue. Maecenas ultrices ac odio id hendrerit. Praesent ac purus vel urna sollicitudin facilisis vitae ut erat. Vivamus neque sapien, laoreet ut finibus nec, blandit non ligula. Sed sed commodo sem, sed euismod libero.`

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'