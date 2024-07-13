#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.rgb(255, 0, 0)(`\n \t\t <<<==================>>>`));
console.log(chalk.bold.rgb(255, 0, 0)(`<<<===========>>> ${chalk.bold.hex(`#00FFFF`)(`Welcome to my OOP Bank!`)} <<<===========>>>`));
console.log(chalk.bold.rgb(255, 0, 0)(`\t\t <<<==================>>>\n`));


interface ibankaccount{
    credit(amount:number):void;
    debit(amount:number):void;
}
 
class Bankaccount implements ibankaccount{
    accountbalance : number;
    constructor(accountbalance:number){
        this.accountbalance = accountbalance;
    }

public credit(amount:number) {

    if (amount>0) {
        this.accountbalance+=amount;
    console.log(chalk.greenBright("Credit successfully! , share in new account and your balance is :"+this.accountbalance));
}
else {
    console.log(chalk.redBright("Credit unsuccessful!"));
}

}
public debit(amount:number){

    if(amount<=this.accountbalance){
        this.accountbalance-=amount;
        console.log(chalk.greenBright("Debit successfully! , share in new account and your balance is :"+this.accountbalance));
    }
    else{
        console.log(chalk.redBright("Debit unsuccessful!"));
    }
}

}

class Customer {
    person : {
        firstName: string;
        lastName: string;
    }
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: Bankaccount;

    constructor(person: { firstName: string; lastName: string; }, age: number, gender: string, mobile_number: number, bankaccount: Bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }

    public display() {
        console.log(chalk.magenta.bold("Name: " + this.person.firstName + " " + this.person.lastName));
        console.log(chalk.cyanBright.bold("Age:" + this.age));
        console.log(chalk.yellowBright.bold("Gender:" + this.gender));
        console.log(chalk.greenBright.bold("Mobile Number:" + this.mobile_number));
        console.log(chalk.blueBright.bold("Amount in Bank:" + this.bankaccount.accountbalance)); 
        console.log();
    }
}

const a1=new Bankaccount(800);
const c1=new Customer({ firstName: "Ruba", lastName: "Haroon"}, 25, "Female",3152745896,a1);

c1.display();
c1.bankaccount.debit(500);
console.log();

const a2=new Bankaccount(500);
const c2=new Customer({ firstName: "Sara", lastName: "Khan"}, 25, "Female",3152745896,a2);

c2.display();
c2.bankaccount.credit(300);
console.log();