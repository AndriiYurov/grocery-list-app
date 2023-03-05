import axios from "axios";

const getItems = (setItems) => {
    axios.get('https://grocery-list-app-q7nc.onrender.com')
    .then(({data}) => {
        setItems(data)
    })
}

const addItems = (title, setTitle, setItems) => {
    axios.post('https://grocery-list-app-q7nc.onrender.com/saveList', { title })
    .then(() => {
        setTitle('')
        getItems(setItems)
    })
}

const deleteItems = (_id, setItems, setTitle, setEditing) => {
    axios.post('https://grocery-list-app-q7nc.onrender.com/deleteList', {_id})
    .then(() => {
        getItems(setItems)
        setTitle('')
        setEditing(false)
    })
}

const editItems = (itemId, title, setTitle, setItems, setEditing) => {
    axios.post('https://grocery-list-app-q7nc.onrender.com/updateList', { _id: itemId, title})
    .then(() => {
        setTitle('')
        setEditing(false);
        getItems(setItems)
    })
}

const deleteAll = ( setItems, setTitle, setEditing ) => {
    axios.post('https://grocery-list-app-q7nc.onrender.com/deleteMany', {})
    .then(() => {
        getItems(setItems)
        setTitle('')
        setEditing(false)
    } )
}



export { getItems, addItems, deleteItems, editItems, deleteAll };
