import React, { useState } from 'react';



const AddCard = ({close, addCard, currentCollection, display, noClose}) => {
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        let newCard = {word:word,definition:definition};
        addCard(newCard);
        close();
    }

    return currentCollection.title && !noClose ?(  
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Word:</label>
                <input type="text" value = {word} onChange = {(event)=> setWord(event.target.value)}/>
            </div>
            <div >
                <label>Definition:</label>
                <textarea value = {definition} onChange = {(event)=> setDefinition(event.target.value)}/>
            </div>
            <button type = 'submit'>Add Card</button>
            <button onClick = {close}>Cancel</button>
        </form>
    ): noClose ? (
        <form onSubmit = {handleSubmit}>
        <div>
            <label>Word:</label>
            <input type="text" value = {word} onChange = {(event)=> setWord(event.target.value)}/>
        </div>
        <div>
            <label>Definition:</label>
            <textarea value = {definition} onChange = {(event)=> setDefinition(event.target.value)}/>
        </div>
        <button type = 'submit'>Add Card</button>
    </form>
    ): 
        <form>
        <h4>Please Select a Collection First</h4>
        <button onClick = {close}>Close</button>
        </form>
}
 
export default AddCard;