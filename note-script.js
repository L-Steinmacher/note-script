#!/usr/bin/env node

const fs = require("fs");
const {Command} = require("commander");

function makeDir(dirName) {
    fs.mkdir(`${dirName}-notes`, {recursive:true}, (err) => console.error(err))
}

function createFiles(filePath) {
    if (sessions) {
        for (let i = 1; i <= sessions; i++) {
            fs.writeFileSync(`${filePath}-notes/${filePath}-stream${i}-notes.md`,noteTemplate);
            fs.writeFileSync(`${filePath}-notes/${filePath}-stream${i}-additional-notes.md`,additionalNoteTemplate)
        }
    } else {
        fs.writeFileSync(`${filePath}-notes/${filePath}-notes.md`,noteTemplate);
        fs.writeFileSync(`${filePath}-notes/${filePath}-additional-notes.md`, additionalNoteTemplate);
    }
}

const program = new Command();

program
    .requiredOption('-d, --date <date>', 'date of the session')
    .option('-s, -sessions <sessions>', 'the quantity of sessions to generate')

program.parse(process.argv)

const options = program.opts();
let date = options.date;

const noteTemplate = fs.readFileSync("./notes-template.md");
const additionalNoteTemplate = fs.readFileSync("./additional-notes-template.md");

let sessions = options.Sessions;

makeDir(date)
createFiles(date)

console.log(sessions ? `🎉 ${ sessions } sets of notes for ${date} generated successfully!` : `🎉 notes files for ${date} generated successfully!`)