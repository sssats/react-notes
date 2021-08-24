export default function LocalStorageService() {
    return {
        getNotes: getNotes,
        addNote: addNote
    }
}

function getItems(item) {
    localStorage.getItem('');
}

function setItem() {
    localStorage.setItem('note-' + item.id, JSON.stringify(item));
}