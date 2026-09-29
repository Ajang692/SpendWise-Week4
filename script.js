let budget = 0;
let expenses = 0;

budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

let remainingBalance = calculateBalance(budget, expenses);

console.log("===== SpendWise Budget Summary =====");
console.log("Total Budget: KSh " + budget);
console.log("Total Expenses: KSh " + expenses);
console.log("Remaining Balance: KSh " + remainingBalance);