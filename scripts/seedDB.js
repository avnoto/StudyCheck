const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/budgets"
);

const BudgetSeed = [{
    amount: 3.50,
    expenseTitle: "Starbucks",
    category: "Food"
}
];

db.Budget.remove({})
    .then(() => db.Budget.collection.insertMany(BudgetSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
