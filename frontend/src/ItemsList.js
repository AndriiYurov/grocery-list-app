import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import './App.css';
import imgCheck from './check.jpg';
import { useState } from "react";

export const ItemsList = ({ text, deleteItems, updateItems}) => {

    const [cross, setCross] = useState(false)

    const crossWord = (e) => {
        const li = e.target;
        li.classList.toggle('crossed');
        if(cross === false) {
            setCross(true)
        }
        else {
            setCross(false)
        }
    }

    return (
        <div>
            {/* <p onClick={crossWord}><img src={imgCheck} width="30px" alt="cart"/>{text}</p> */}
            <div onClick={crossWord}><img src={imgCheck} width="30px" alt="cart"/>{text}</div>
            <AiFillEdit onClick={cross ? null : updateItems}></AiFillEdit>
            <AiFillDelete onClick={deleteItems}></AiFillDelete>
        </div>
    )
}