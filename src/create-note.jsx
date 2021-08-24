import React, {useState} from 'react';

export default function CreateNote({addNote}) {
    const [note, setNote] = useState({title: '', text: ''});

    function createNote() {
        const newNote = {...note, id: Date.now()}
        addNote(newNote);
        setNote({title: '', text: ''});
    }

    return (
        <div>
            <p>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={note.title}
                    onChange={(e) => setNote({...note, title: e.target.value})}
                />
            </p>
            <p>
            <textarea
                value={note.text}
                onChange={(e) => setNote({...note, text: e.target.value})}
            />
            </p>
            <button disabled={!(note.title || note.text)} onClick={createNote}>Create new</button>
        </div>
    );
};
