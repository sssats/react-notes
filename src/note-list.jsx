import React from "react";
import Note from "./note";

export default function NoteList({notesList, removeNote}) {
    return (
        <ul>
            {
                notesList.map(note =>
                    <li key={note.id}>
                        <Note note={note}  onRemove={removeNote}/>
                    </li>
                )
            }
        </ul>
    )
}

