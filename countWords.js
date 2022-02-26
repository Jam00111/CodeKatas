/**
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
    if(word.length === 0){
        return prod;
    }
        //check if owrd is already in map, if not add it's first occurrance, otherwise incriment 
            if(!prod.has(word)){
                prod.set(word, 1);
            }else{
                let temp = prod.get(word);
                temp++;
                prod.delete(word);
                prod.set(word, temp);
            }
            return prod;
        }, new Map());
    //remove any banned words if the banned list is nto empty
    if(banned.length > 0){
        banned.forEach(word => {
            wordMap.delete(word);
        })
    }
    //check our map for the largest val stored to find the owrd occurring the most
    for(let [word, i] of wordMap){
        if(i > max){
            max = i;
            res = word;
        }
    }
    return res;
    
};
