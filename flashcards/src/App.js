
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Components/CardContainer/CardViewer/Card/Card';
import Header from './Components/Header/Header';

function App() {

    const [flashcards, setFlashcards] = useState([])

    useEffect(()=>{
      getAllCards();
    },[]);
    async function getAllCards() {
      const response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/')
      setFlashcards(response.data)
    }


  return (
    <div>
      <Header/>
      <Card flashcards={flashcards} setFlashcards={setFlashcards}/>
      
    </div>
    
  );
}

export default App;