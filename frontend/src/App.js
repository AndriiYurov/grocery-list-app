
import { useEffect, useState } from 'react';
import './App.css';
import imgShopping from './shopping.jpg';
import imgMan from './man.jpg';
import { getItems, addItems, deleteItems, editItems, deleteAll } from './FetchItems';
import { ItemsList } from './ItemsList';

function App() {

  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    getItems(setItems)
  }, [])

  const updateItems = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setItemId(_id)
  }

  return (
    <div className="App">
    <div className="container">
    <img src={imgShopping} width="250px" alt="shopping"/>
    </div>
    <div className='container'>
    <h1>Grocery List</h1>
    </div>
    <div className="container">
      <input
      type="text"
      placeholder="Add items"
      value={title}
      onChange={(e) => setTitle(e.target.value.replace(/[^\w\s]/gi, ""))}
      />
    </div>
    <div className='container'>
      <button disabled={!title}
        className='addButton'
        onClick={editing ? () => editItems(itemId, title, setTitle, setItems, setEditing) : () => addItems(title, setTitle, setItems)}>
        {editing ? "Edit" : "Add"}
      </button>
    </div>
    <ul>
      {items.map((item) => 
      <li key={item._id}>
      <ItemsList text={item.title}
      deleteItems={() => deleteItems(item._id, setItems, setTitle, setEditing)}
      updateItems={() => updateItems(item._id, item.title)}
      />
      </li>
      )}
    </ul>

    <div className='container'>
      <button className='deleteButton' onClick={() => deleteAll(setItems, setTitle, setEditing)}>Delete All</button>
    </div>
    {/* <textarea  value={textArea} 
    onChange={(e) => setTextArea(e.target.value.replace(/[^\w\s]/gi, ""))}
    ></textarea>
    <button onClick={() => editItems(itemId, textArea, setTextArea, setTitle, setItems)}>Edit</button> */}
    <img src={imgMan} width="250px" alt="man"/>
    </div>
  );
}

export default App;
