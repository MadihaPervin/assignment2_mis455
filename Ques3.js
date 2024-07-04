function findMaxNumber() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let max = Math.max(num1, num2, num3);
    console.log("The greatest number is:", max);
}