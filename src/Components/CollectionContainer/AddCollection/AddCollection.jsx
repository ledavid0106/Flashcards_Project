import React, { useState } from 'react';


const AddCollection = ({createCollection, close}) => {
    const [title,setTitle] = useState('')
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');


const handleSubmit = (event) => {
    event.preventDefault();
    let newCollection = {title:title};
    let newCard = {word:word,definition:definition};
    let newItems = {newCollection:newCollection,newCard:newCard};
    close()
    createCollection(newItems);
}

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Collection Title</label>
                <input type="text" value = {title} onChange = {(event)=> setTitle(event.target.value)}/>
            </div>
            <button type = 'submit'>Create Collection</button>
            <button onClick = {close}>Cancel</button>
        </form>

      );
}
 
export default AddCollection;
