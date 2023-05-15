/* Task 1 */
let firstSentenceCut = 'But you have no right to call me a murderer';
let secondSentenceCut = 'Because they could stand that these were not monsters.';
let thirdSentenceCut = 'And I want to remember it. I never want to forget it.';

function stringCutter(str) {
  if (str.length > 30) {
    return `${str.slice(0, 30)}...`
  } else {
    return str
  }
}

console.log(stringCutter(firstSentenceCut))
console.log(stringCutter(secondSentenceCut))
console.log(stringCutter(thirdSentenceCut))


/* Task 2 */
function registerInvertion(str) {
  return str.split('')
    .map((letter) =>
      letter === letter.toUpperCase() ?
        letter.toLowerCase() :
        letter.toUpperCase())
    .join('')
}

console.log(registerInvertion('WTF'))
console.log(registerInvertion('Be my Valentine'))
console.log(registerInvertion('C&C Red Alert 3'))


/* Task 3 */

function registerInvertion(str) {
  const obj = {};
  const arrWords = str.split(' ');
  obj.allSymbols = str.length;
  obj.symbolsWithoutSpaces = arrWords.join('').length
  obj.quantityOfWords = arrWords.length;

  if (str.trim().slice(-1) === '?') {
    obj.sentenceType = 'question'
  } else if (str.trim().slice(-1) === '.') {
    obj.sentenceType = 'statement'
  } else if (str.trim().slice(-1) === '!') {
    obj.sentenceType = 'exclamation'
  } else {
    obj.sentenceType = null
  }

  return obj

}

console.log(registerInvertion('Привет как дела? '))


/* Task 4 */

let firstSentence = 'Follow the white raBbiT';
let secondSentence = 'Call me Ishmael';
let thirdSentence = 'Repent before bloody rabbit punish you!';

let bannedWord = 'rabbit';


function moderation(sentence, bannedWord) {
  /*
  const arrWords = sentence.split(' ')
  
  let words = '';
  
  arrWords.forEach((elem) =>  {
  if(elem.toLowerCase().includes(bannedWord.toLowerCase())){
    for(let i = 0; i<elem.length; i++){
      words += '*'
    }
  words += ' ';
  
  } else {
  words +=elem + ' '
  }
  
  })
  return words.trim()
  */

  const words = sentence.split(' ');

  return words.map(word => {
    if (word.toLowerCase().includes(bannedWord.toLowerCase())) {
      return "*".repeat(word.length);
    } else {
      return word;
    }

  }).join(" ");

};


console.log(moderation(firstSentence, bannedWord));
console.log(moderation(secondSentence, bannedWord));
console.log(moderation(thirdSentence, bannedWord));