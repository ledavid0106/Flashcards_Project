import AddCard from './AddCard/AddCard';
import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal/Modal';

const Header = ({currentCollection, getFlashcards, currentCard, flashCards,setCurrentCard}) => {
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

    return ( 
        <div>
            <Modal title = 'Add Card' onClose={handleAdd} show ={showAdd}>
                <AddCard close={handleAdd} addCard= {addCard} currentCollection={currentCollection}/>
            </Modal>

            <div >Flashcards</div>
            <table>
                <tbody>
                    <tr>
                        <td onClick = {handleAdd}>Add Card</td>
                        <td >Edit Card</td>
                        <td >Delete Card</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Header;