import React, { useState } from 'react';


const EditCard = ({currentCard, currentCollection, flashcards, editCard, close}) => {

    const [word,setWord] = useState(flashcards[currentCard].word);
    const [definition,setDefinition] = useState(flashcards[currentCard].definition);

    const handleSubmit = (event) => {
        event.preventDefault()
        let newCard = {word:word,definition:definition};
        editCard(newCard);
        close();
    }

    return currentCollection.title? (  
        <form onSubmit = {handleSubmit}>
            <div >
                <label>Word:</label>
                <div></div>
                <input type="text" value = {word} onChange = {(event)=> setWord(event.target.value)}/>
            </div>
            <div>
                <label>Definition:</label>
                <div></div>
                <textarea value = {definition} onChange = {(event)=> setDefinition(event.target.value)}/>
            </div>
            <button type = 'submit'>Edit Card</button>
            <button onClick = {close}>Cancel</button>
        </form>
    ) :
    <form >
    <h4>Select a Collection</h4>
    <button onClick = {close}>Close</button>
    </form>

}
 
export default EditCard;