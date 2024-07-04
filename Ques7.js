function checkVowelOrConsonant() {
    let char = document.getElementById('character').value.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (char.length !== 1 || !char.match(/[a-z]/i)) {
        console.log("Please enter a single alphabet character.");
    } else if (vowels.includes(char)) {
        console.log(`${char.toUpperCase()} is a vowel.`);
    } else {
        console.log(`${char.toUpperCase()} is a consonant.`);
    }
}