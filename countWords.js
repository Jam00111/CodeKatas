/**
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.


Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"

Constraints:

    1 <= paragraph.length <= 1000
    paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
    0 <= banned.length <= 100
    1 <= banned[i].length <= 10
    banned[i] consists of only lowercase English letters.


 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let wordMap = new Map();
  let max = 0;
  let res = '';
  //split and iterate the paragraph. By passing  reg exp to .split we can split on mulitple values
  wordMap = paragraph.split(/,| /).reduce((prod, word) => {
    //remove all punctuation with a reg ex
    word = word.toLowerCase().replace(/[!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    if (word.length === 0) {
      return prod;
    }
    //check if owrd is already in map, if not add it's first occurrance, otherwise incriment
    if (!prod.has(word)) {
      prod.set(word, 1);
    } else {
      let temp = prod.get(word);
      temp++;
      prod.delete(word);
      prod.set(word, temp);
    }
    return prod;
  }, new Map());
  //remove any banned words if the banned list is nto empty
  if (banned.length > 0) {
    banned.forEach(word => {
      wordMap.delete(word);
    })
  }
  //check our map for the largest val stored to find the word occurring the most
  for (let [word, i] of wordMap) {
    if (i > max) {
      max = i;
      res = word;
    }
  }
  return res;

};
