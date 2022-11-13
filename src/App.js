import axios from 'axios';
import React, { useEffect, useState } from 'react';


import CollectionContainer from './Components/SideBar/CollectionContainer/CollectionContainer';
import './App.css';
import Nav from './Components/Nav/Nav';
import CardContainer from './Components/CardContainer/CardContainer';

function App() {
    const [collections,setCollections] = useState([]);
    const [currentCollection,setCurrentCollection] = useState({id: 0 ,title:''});
    const [flashcards, setFlashcards] = useState([{word:"",definition: ""}])
    const [currentCard, setCurrentCard] = useState(0)

    useEffect(()=>{
      getAllCollections();
    },[]);

    async function getAllCollections() {
      const response = await axios.get('http://127.0.0.1:8000/api/collections/')
      setCollections(response.data)
    }
    async function getFlashcards(collectionID) {
      let endpoint = 'http://127.0.0.1:8000/api/collections/' + collectionID +'/cards/';
      const response = await axios.get(endpoint);
      setFlashcards(response.data)
    }

    const setCurrentSelections = (collection) => {
      setCurrentCollection(collection);
      getFlashcards(collection.id);
      setCurrentCard(0);

    }


  return (
    <div>
    <Nav/>
    <div className='whole'>
      <div className="container">
        <CollectionContainer getFlashcards={getFlashcards} getAllCollections = {getAllCollections} setCurrentSelections={setCurrentSelections} collections={collections} setCurrentCard = {setCurrentCard} currentCollection = {currentCollection} setCurrentCollection = {setCurrentCollection} />
      </div>
      <CardContainer flashcards={flashcards}  getFlashcards={getFlashcards} currentCard={currentCard} setCurrentCard={setCurrentCard} currentCollection={currentCollection}/>
      </div>
      </div>
  );
}

export default App;