#!/usr/bin/env node

const fs = require("fs");
const {Command} = require("commander");

// the script should take in a argument of date that will create a directory based on the date
// /yyyy-mm-dd-notes/
// it will take in and optional argument sessions
//      sessions will be a number
//      sessions will indicate the number of files generated
//      sessions will be a default of 1

// then the script will create two markdown files based on the templates 

// /yyyy-mm-dd-notes.md template
// ## header here 
// - first bullet

// /yyyy-mm-dd-additional-notes.md template
// **Summary**
// -

// **Tools / Concepts / Notable Files**
// -

// **Questions for Clarification**
// - 

// **Additional Content Ideas**
// -




// async function makeDir(dirName) {

//     await fs.mkdir(folderPath, {recursive:true}, (err) => console.error(err))
    
// }

const program = new Command();

program
    .requiredOption('-d, --date <date>', 'date of the session')
    .option('-s, -sessions <sessions>', 'the quantity of sessions to generate')
 
program.parse(process.argv)

const options = program.opts();
console.log(options)
let date = options.date;

const noteTemplate = fs.readFileSync("./notes-template.md");
const additionalNoteTemplate = fs.readFileSync("./additional-notes-template.md");

let sessions = options.Sessions;
console.log(sessions)



// if (sessions) {
//     for (let i = 1; i <= sessions; i++) {
//         fs.writeFileSync(` ${folderPath}/${date}-stream${i}-notes.md`,noteTemplate);
//         fs.writeFileSync(` ${folderPath}/${date}-stream${i}-notes.md`,noteTemplate)
        
//     }
// } else {
//     if (newDir){
//     fs.writeFileSync(` ${folderPath}/${date}-notes.md`,noteTemplate);
//     fs.writeFileSync(` ${folderPath}/${date}-additional-notes.md`, additionalNoteTemplate);
//     }
// }
