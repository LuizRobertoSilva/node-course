const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }

    var duplicateNote = notes.filter((note) => note.title === title);

    if (duplicateNote.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    return fetchNotes();
};
var removeNote = (title) => {
    var notes = fetchNotes();
    var noteSelect = notes.filter((note) => note.title !== title);
    if (noteSelect.length != notes.length) {
        saveNotes(noteSelect);

        console.log('Title:', title, ' was removed');
    } else {
        console.log('Note not Found!');
    }

};
var getNote = (title) => {
    var notes = fetchNotes();
    var noteSelect = notes.filter((note) => note.title === title);
    return noteSelect[0];
};

var logNote = (note) => {
    console.log('---');
    console.log('Title:', note.title);
    console.log('Body:', note.body);
}

module.exports = {
    addNote,
    getAll,
    readNote: getNote,
    removeNote,
    logNote
}