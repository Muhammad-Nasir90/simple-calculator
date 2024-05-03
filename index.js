#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
{
    console.log(chalk.yellow.bold.bgBlack(`\n          Wellcome My Simple-Calculator Project 😇          \n`));
    let exit = false;
    while (!exit) {
        const ans = await inquirer.prompt([
            { message: "Enter your first number :", type: "number", name: "firstNumber" },
            { message: "Enter your second number :", type: "number", name: "secondNumber" },
            {
                message: "Select one of the operator to perfom operation",
                type: "list",
                name: "operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
        ]);
        if (ans.operator === "Addition") {
            console.log(`Your Answer is : ${chalk.green(ans.firstNumber + ans.secondNumber)}`);
        }
        else if (ans.operator === "Subtraction") {
            console.log(`Your Answer is : ${chalk.green(ans.firstNumber - ans.secondNumber)}`);
        }
        else if (ans.operator === "Multiplication") {
            console.log(`Your Answer is : ${chalk.green(ans.firstNumber * ans.secondNumber)}`);
        }
        else if (ans.operator === "Division") {
            console.log(`Your Answer is : ${chalk.green(ans.firstNumber / ans.secondNumber)}`);
        }
        else {
            console.log("Please Select valid operator");
        }
    }
}
