//Write a js program to create a word meaning dictionary of 5 words

let dictionary = {
    apple: "A round fruit with red, green, or yellow skin.",
    elephant: "A large mammal with a trunk.",
    ocean: "A vast body of saltwater covering most of the Earth.",
    mountain: "A natural elevation of the Earth's surface, higher than a hill.",
    computer: "An electronic device used for processing and storing data."
};

function getMeaning(word) {
    return dictionary[word] ? dictionary[word] : "Word not found in dictionary";
}

console.log(getMeaning("apple"));  
console.log(getMeaning("ocean"));   
console.log(getMeaning("car")); 