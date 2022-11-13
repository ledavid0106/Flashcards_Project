import AddCard from './AddCard/AddCard';
import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal/Modal';
import EditCard from './EditCard/EditCard';
import DeleteCard from './DeleteCard/DeleteCard';
import './Header.css';

const Header = ({currentCollection, getFlashcards, currentCard, flashcards, setCurrentCard}) => {
    const [showAdd,setShowAdd] = useState(false)
    const handleAdd = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }
    async function addCard(newCard) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/'
        const response = await axios.post(endpoint,newCard)
        if (response.status === 201){
            getFlashcards(currentCollection.id)
        }
    } 

    const [showEdit,setShowEdit] = useState(false)
    const handleEdit = () => {
        if (!showEdit) {setShowEdit(true);}
        else {setShowEdit(false);}
    }
    async function editCard(newCard) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/' + flashcards[currentCard].id + '/'
        const response = await axios.put(endpoint,newCard)
        if (response.status === 200){
            getFlashcards(currentCollection.id)
        }
    }

    const [showDelete,setShowDelete] = useState(false)
    const handleDelete = () => {
        if (!showDelete) {setShowDelete(true);}
        else {setShowDelete(false);}
    }
    async function deleteCard() {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/' +flashcards[currentCard].id + '/'
        const response = await axios.delete(endpoint)
        if (response.status === 204){
            if(currentCard != 0){
                setCurrentCard(currentCard-1);
            }
            getFlashcards(currentCollection.id);
        }
    } 
    return ( 
        <div>
            <Modal title = 'Add Card' onClose={handleAdd} show ={showAdd}>
                <AddCard close={handleAdd} addCard= {addCard} currentCollection={currentCollection}/>
            </Modal>
            <Modal title = 'Edit Card' onClose = {handleEdit} show ={showEdit}>
                <EditCard close = {handleEdit}  currentCard ={currentCard} currentCollection={currentCollection} 
                editCard = {editCard} flashcards = {flashcards}/>
            </Modal>
            <Modal title = 'Delete Card' onClose = {handleDelete} show ={showDelete}>
                <DeleteCard close = {handleDelete} deleteCard = {deleteCard} 
                currentCard = {currentCard} flashcards = {flashcards}/>
            </Modal>
            <div ></div>
            <table>
                <tbody>
                    <tr className='header'>
                        <td onClick = {handleAdd}>Add </td>
                        <td className="white">testtesttesttesttesttest</td>
                        <td onClick = {handleEdit}>Edit </td>
                        <td className="white">testtesttesttesttesttest</td>
                        <td  onClick = {handleDelete}>Delete </td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Header;