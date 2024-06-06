#!/usr/bin/env node
import inquirer from "inquirer";
// define the list of currecies and their exchange rates
let exchange_rates = {
    "USD": 1, //base currency
    "EUR": 0.92,
    "JYP": 157.26,
    "INR": 83.44,
    "PKR": 278.10,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EUR", "JYP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = exchange_rates[user_answer.from];
let toAmount = exchange_rates[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //convert into base currency
let covertedAmounted = baseAmount * toAmount;
console.log(covertedAmounted.toFixed(2));
