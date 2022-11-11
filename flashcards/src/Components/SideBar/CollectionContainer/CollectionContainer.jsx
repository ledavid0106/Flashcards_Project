import Collection from "./Collection/Collection";
import React, { useState } from 'react';
import axios from 'axios';
import AddCard from "../../Header/AddCard/AddCard";
import AddCollection from "./AddCollection/AddCollection";
import Modal from "../../Header/Modal/Modal";
import './Collection.css'

const CollectionContainer = ({getFlashcards, collections, getAllCollections, currentCollection, setCurrentCollection, setCurrentSelections}) => {
    const [showAdd,setShowAdd] = useState(false);
    const [showAddCard,setShowAddCard] = useState(false);

    const handleCreateCollection = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }
    const handleAddCard = () => {
        if (!showAddCard) {setShowAddCard(true);}
        else {setShowAddCard(false);}
    }

    const createCollection = (obj) => {
        addCollection(obj.newCollection);
        setShowAddCard(true);
    }

    const createCard = (card) => {
        addCard(card,collections[collections.length-1].id)
    }

    async function addCard(newCard,id) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + id +'/cards/'
        const response = await axios.post(endpoint,newCard)
        if (response.status === 201){
            setCurrentSelections(collections[collections.length-1])
        }
    } 

    async function addCollection(newCollection) {
        const response = await axios.post('http://127.0.0.1:8000/api/collections/',newCollection)
        if (response.status === 201){
            await getAllCollections();
        }
    }

    return (  
        <>
        <Modal title = 'Create Collecton' onClose = {handleCreateCollection} show = {showAdd} >
            <AddCollection close = {handleCreateCollection} createCollection = {createCollection}/>
        </Modal>
        <Modal title = 'Add Card' onClose = {handleAddCard} show = {showAddCard} noClose = {true} >
            <AddCard close = {handleAddCard} addCard = {createCard} currentCollection = {currentCollection} display = {true} noClose = {true}/>
        </Modal>

        <div>
            <div>
                <div>
                    <div>Collections</div>
                    <div className="grey">test</div>
                    <div className="grey">test</div>
                    <div> 
                        <div className="collections">
                           {collections.map((collection,i) => {
                               return(
                                   <span key = {i}>
                                    <Collection collection = {collection} setCurrentSelections = {setCurrentSelections}/>
                                    </span>
                                )
                            })} 
                        </div>
                    </div>
                </div>
                <div onClick = {handleCreateCollection}>Add Collection</div>
            </div>
        </div>
        </>
    );
}
 
export default CollectionContainer;