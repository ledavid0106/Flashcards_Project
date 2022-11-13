import React, { useState } from 'react';

const DeleteCard = ({close, deleteCard, flashcards, currentCard}) => {
    const handleSubmit = () => {
        deleteCard();
        close();
    }
    
    return flashcards[0].word && flashcards.length > 1?(  
        <form onSubmit={handleSubmit}>

            <h4 >DELETE the "{flashcards[currentCard].word}" card?</h4>
            <button type = 'submit'>DELETE</button>
            <button onClick = {close}>Cancel</button>
        </form>
    ): flashcards[0].word ?(
        <form >
        <div >
            <h4>Collections need at least ONE Card </h4>
            Add another Card before Deleting "{flashcards[currentCard].word}" </div>
        <button onClick = {close}>Close</button>
    </form>
     ) :
    <form >
        <h4 > Select a Collection</h4>
        <button onClick = {close}>Close</button>
    </form>
} ;

 
export default DeleteCard;