
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
      setFlashcards(response.data)
    }
    async function getFlashcards(collectionID) {
      let endpoint = 'http://127.0.0.1:8000/api/collections/' + collectionID +'/cards/';
      const response = await axios.get(endpoint);
      setFlashcards(response.data)
    }

  return (
    <div>
      <Header/>
      <div>PREV</div>
      <CardNumber flashcards={flashcards} currentCollection = {currentCollection} currentCard = {currentCard} />
      <div>NEXT</div>
    </div>
    
  );
}

export default App;