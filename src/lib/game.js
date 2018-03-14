const words= ['tabel','man','train','car'];
const word = words[Math.floor(Math.random() * words.length)];
const guesses= ['r','a'];

export const showGuess =(word, guesses)=> {
 return word
  .split('')
  .map(char => (guesses.includes(char) ? char : '_'))
 }
