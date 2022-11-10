import AddCard from './AddCard/AddCard';
import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal/Modal';
import EditCard from './EditCard/EditCard';

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

    return ( 
        <div>
            <Modal title = 'Add Card' onClose={handleAdd} show ={showAdd}>
                <AddCard close={handleAdd} addCard= {addCard} currentCollection={currentCollection}/>
            </Modal>
            <Modal title = 'Edit Card' onClose = {handleEdit} show ={showEdit}>
                <EditCard close = {handleEdit}  currentCard ={currentCard} currentCollection={currentCollection} 
                editCard = {editCard} flashcards = {flashcards}/>
            </Modal>

            <div >Flashcards</div>
            <table>
                <tbody>
                    <tr>
                        <td onClick = {handleAdd}>Add Card</td>
                        <td onClick = {handleEdit}>Edit Card</td>
                        <td >Delete Card</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Header;