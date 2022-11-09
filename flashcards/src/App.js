
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Components/CardContainer/CardViewer/Card/Card';
import CardNumber from './Components/CardContainer/CardViewer/CardNumber/CardNumber';
import Header from './Components/Header/Header';

function App() {
    const [collections,setCollections] = useState([]);
    const [flashcards, setFlashcards] = useState([])
    const [currentCollection,setCurrentCollection] = useState(1);
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
  }
    const changeCard = (change) => {
      if (flashcards.length){
        let result = currentCard + change;
        if (result > flashcards.length){ setCurrentCard(0)}
        else if ( result < 0 ){ setCurrentCard(flashcards.length)}
        else { setCurrentCard(result)}
      }
    }



  return (
    <div>
      <Header/>
      <div onClick = {changeCard(-1)}>PREV</div>
      <CardNumber flashcards={flashcards} currentCollection = {currentCollection} currentCard = {currentCard} />
      <div onClick = {changeCard(1)}>NEXT</div>
    </div>
    
  );
}

export default App;