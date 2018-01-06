//Stringfy transforma objeto em um JSON
//Parse tranforma JSON em uma string

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some body'
};
 originalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNote);

var noteString = fs.readFileSync('Notes.json');
noteString = JSON.parse(noteString);
console.log(typeof noteString);
console.log(noteString);





