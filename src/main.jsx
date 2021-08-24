import React from "react";
import Note from "./note";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: ['one', 'two', 'three', 'four'].map((item, index) => noteItem(item, index))
        };

        this.inputRef = React.createRef();
        this.addNote = this.addNote.bind(this);
        this.remove = this.remove.bind(this);

    }

    addNote() {
        const newNotes = [...this.state.notes, noteItem(this.inputRef.current.value, this.state.notes.length)];
        this.inputRef.current.value = '';
        this.setState({
            notes: newNotes
        });
    }

    remove(element) {
        this.setState({
            notes: this.state.notes.filter(el => el.id !== element.props.id)
        })
    }

    render() {
        return <>
            <header>
                <h1>React note app</h1>
            </header>
            <main>
                <ul>
                    {
                        this.state.notes.map((el, ind) =>
                            <li key={ind}>
                                <Note id={el.id} title={el.title} onRemove={this.remove}/>
                            </li>
                        )
                    }
                </ul>
                <div>
                    <input type="text" ref={this.inputRef}/>
                    <button onClick={this.addNote}>Create new</button>
                </div>
            </main>
            <footer></footer>
        </>
    }
}

function noteItem(title, index) {
    return {
        id: Date.now() + index,
        title: title
    }
}
