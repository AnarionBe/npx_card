#!/usr/bin/env node

const figlet = require("figlet");
const box = require("boxen");
const chalk = require("chalk");

const box_config = {
    borderColor: "#9c0000",
    borderStyle: "round",
    float: "center",
    padding: 2
};

const card_data = "\n" +
                chalk.cyan.bgBlack("LinkedIn => https://www.linkedin.com/in/marco-de-bona-49a6b9b4\n\n") +
                chalk.magenta.bgBlack("GitHub => https://github.com/AnarionBe\n\n") +
                chalk.blue.bgBlack("Twitter => https://twitter.com/Be_Anarion\n\n") +
                chalk.red.bgBlack("npm => https://www.npmjs.com/~anarion\n\n");

figlet.text("Marco De Bona", (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow.bold(data) + "\n" + box(card_data, box_config));
});