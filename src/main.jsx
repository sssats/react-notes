import React, {useState} from 'react';
import CreateNote from "./create-note";
import NoteList from "./note-list";

export default function HomePage() {
    const [notesList, notesListUpdate] = useState([]);

    function addNote(newNote) {
        notesListUpdate([...notesList, newNote]);
    }

    function removeNote(id) {
        notesListUpdate(
            notesList.filter(note => note.id !== id)
        );
    }

    return (
        <>
            <header>
                <h1>React note app</h1>
            </header>
            <CreateNote addNote={addNote}/>
            <main>
                {
                    !notesList.length ? <h1>There are no notes now</h1> :
                        <NoteList notesList={notesList} removeNote={removeNote}/>
                }
            </main>
        </>
    )
}
