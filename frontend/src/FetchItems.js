import axios from "axios";

const getItems = (setItems) => {
    axios.get('http://localhost:4000')
    .then(({data}) => {
        setItems(data)
    })
}

const addItems = (title, setTitle, setItems) => {
    axios.post('http://localhost:4000/saveList', { title })
    .then(() => {
        setTitle('')
        getItems(setItems)
    })
}

const deleteItems = (_id, setItems, setTitle, setEditing) => {
    axios.post('http://localhost:4000/deleteList', {_id})
    .then(() => {
        getItems(setItems)
        setTitle('')
        setEditing(false)
    })
}

const editItems = (itemId, title, setTitle, setItems, setEditing) => {
    axios.post('http://localhost:4000/updateList', { _id: itemId, title})
    .then(() => {
        setTitle('')
        setEditing(false);
        getItems(setItems)
    })
}

const deleteAll = ( setItems, setTitle, setEditing ) => {
    axios.post('http://localhost:4000/deleteMany', {})
    .then(() => {
        getItems(setItems)
        setTitle('')
        setEditing(false)
    } )
}



export { getItems, addItems, deleteItems, editItems, deleteAll };