function calculateDiscount() {
    let name = document.getElementById('name').value;
    let tuitionFees = parseFloat(document.getElementById('tuitionFees').value);
    let birthYear = parseInt(document.getElementById('birthYear').value);
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    let discount = 0;
    if (tuitionFees > 50000 && age > 23) {
        discount = 0.20;
    } else if (tuitionFees > 40000 && age > 22) {
        discount = 0.15;
    } else if (tuitionFees > 30000 && age > 21) {
        discount = 0.10;
    } else {
        discount = 0.05;
    }
    let discountAmount = tuitionFees * discount;
    let payableAmount = tuitionFees - discountAmount;
    console.log(`Name: ${name}`);
    console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Payable Tuition Fees: $${payableAmount.toFixed(2)}`);
}