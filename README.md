# Note Generating Script

### Discription
This simple script is run from the terminal to generate note taking files in Markdown⬇️. It takes in two params args to generate the files. `Date` which is also the name of the files being created and `Streams` which is the number of extra files being generated if taking notes for more than one stream on any one given date.  

---
**Params**
1) The name/date of the session that the notes are for signaled with the `-d` flag. Name should be entered as a date `yyyy/mm/dd`
2) Optional second param of streams notated with the `-s` flag. Streams should be entered as a singel int `i`
---
**Running the Script**
An example of the shell command could be:
```sh
node note-script.js -d 2022-11-07 -s 2
```
This will generate one folder named `2022-11-07` with four Markdown files in it labled 
- `2022-11-07-session1-notes.md`
- `2022-11-07-session1-additional-notes.md`
- `2022-11-07-session2-notes.md`
- `2022-11-07-session2-additional-notes.md`
---
**Boilerplate of the files**
Each file will have a bit of boilerplate for the notes being taken.

date-notes.md
```
## Heading
- notes
```

date-additional-notes.md
```
**Summary**
-

**Tools / Concepts / Notable Files**
-

**Questions for Clarification**
- 

**Additional Content Ideas**
-
```
---
This is of course a work in progress and a very trivial note generator. Feel free to use it if you'd like.

