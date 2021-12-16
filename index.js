const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  const result = tutorials.map(sentence =>{
    let words = sentence.split(' ');
    return words.map(word => {
  return  word[0].toUpperCase() + word.split('').slice(1).join('')}).join(' ');
      
  })
    return result;
  }
  
 






// const titleCased = () => {
  
  
//   const tutorialUp = tutorials.map(sentence => {
//     let words = sentence.split(' ');
//     return words.map(word => {
//       return word[0].toUpperCase() + word.split('').splice(1).join('');
//     }).join(' ');
//   })

//   return tutorialUp;

// }

// console.log(titleCased(tutorials));

