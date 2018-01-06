//Modulo de File System
const fs = require('fs');
// Modulo de terceiro Lodash
const _ = require('lodash');

const yargs = require('yargs');

//Funções do meu App Notes
const notes = require('./notes.js');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove a note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
var command = process.argv[2];

if (command == 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log("Note Duplicate");
    }

} else if (command == 'list') {
    var allnotes = notes.getAll();
    console.log('Printing ', allnotes.length, 'note(s)');
    allnotes.forEach(note => notes.logNote(note));

} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }

} else if (command == 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}