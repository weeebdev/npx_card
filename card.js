#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const userInfo = {
  email: "weeebdev@gmail.com",
  resume:
    "https://docs.google.com/viewer?url=https://docs.google.com/document/d/169vbQt_L2pSrQCOzzF3czqAaSMPgbFmi8f2X6jArDTQ/export?format=pdf",
};

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open(`mailto:${userInfo.email}`);
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Wanna my ${chalk.magentaBright.bold("Resume")}?`,
        value: () => {
          open(
            "https://docs.google.com/viewer?url=https://docs.google.com/document/d/169vbQt_L2pSrQCOzzF3czqAaSMPgbFmi8f2X6jArDTQ/export?format=pdf"
          );
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("さようなら。\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             Adil Akhmetov (weeebdev)"),
  handle: chalk.white("@weeebdev"),
  work: `${chalk.white("3rd year student at")} ${chalk
    .hex("#2b82b2")
    .bold("Suleyman Demirel University")}`,
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("weeebdev"),
  github: chalk.gray("https://github.com/") + chalk.green("weeebdev"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("adildev"),
  web: chalk.cyan("https://weeebdev.github.io"),
  npx: chalk.red("npx") + " " + chalk.white("weeebdev"),

  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
