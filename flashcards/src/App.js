
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Components/CardContainer/CardViewer/Card/Card';
import Header from './Components/Header/Header';

function App() {
    const [collections,setCollections] = useState([]);
    const [flashcards, setFlashcards] = useState([])

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
      setFlashcards(response.endpoint)
    }

  return (
    <div>
      <Header/>
    </div>
    
  );
}

export default App;