function checkVotingEligibility() {
    let age = parseInt(document.getElementById('age').value);
    if (age >= 18) {
        console.log("You are eligible to cast vote.");
    } else {
        console.log("You are not eligible to cast vote.");
    }
}