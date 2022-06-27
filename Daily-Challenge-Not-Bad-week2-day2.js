let sentence = "The movie is not that bad , I like it";
let firstResult = sentence.substr(13)
let secondResult = sentence.substr(22)
console.log(firstResult)
console.log(secondResult)


let newSentence = sentence.replace('not that bad',"good");


if(sentence.indexOf('not') && sentence.indexOf('bad')){
    console.log(newSentence)
}else if(sentence.indexOf('bad') && sentence.indexOf('not')){
    console.log(sentence)
}