import React from "react";

export default function Note({note, onRemove}) {
    const {id, title, text} = note;

    return (
        <div>
            <p>
                <span>{title}</span>
                <button onClick={() => onRemove(id)}>
                    <b>&times;</b>
                </button>
            </p>
            <p>
                {text}
            </p>
        </div>
    )
}
