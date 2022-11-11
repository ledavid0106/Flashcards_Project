import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Components/CardContainer/CardViewer/Card/Card';
import CardNumber from './Components/CardContainer/CardViewer/CardNumber/CardNumber';
import NextPrev from './Components/CardContainer/CardViewer/PrevNext/PrevNext';
import Header from './Components/Header/Header';
import CollectionContainer from './Components/SideBar/CollectionContainer/CollectionContainer';

function App() {
    const [collections,setCollections] = useState([]);
    const [flashcards, setFlashcards] = useState([{word:"",definition: ""}])
    const [currentCollection,setCurrentCollection] = useState({id: 0 ,title:''});
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
    const nextFlashcard = () => {
      let result = currentCard + 1;
      if (result+1 > flashcards.length){setCurrentCard(0);}
      else { setCurrentCard(result);}
    }

    const prevFlashcard = () => {
      let result = currentCard - 1;
      let length = flashcards.length;
      if ( result < 0 ){ setCurrentCard(length-1);}
      else { setCurrentCard(result);}
    }

  return (
    <div>
      <CollectionContainer getFlashcards={getFlashcards} getAllCollections = {getAllCollections} setCurrentSelections={setCurrentSelections} 
          collections={collections} setCurrentCard = {setCurrentCard} 
          currentCollection = {currentCollection} setCurrentCollection = {setCurrentCollection} />
      <Header currentCollection={currentCollection} getFlashcards ={getFlashcards}
       currentCard = {currentCard} flashcards = {flashcards}
       setCurrentCard = {setCurrentCard}/>
      <Card flashcards={flashcards} currentCard={currentCard}/>
      <table>
        <tbody>
          <tr>
            <td><NextPrev setCurrentCard={setCurrentCard} flashcards = {flashcards} currentCard = {currentCard} click = {prevFlashcard} text = 'PREV'></NextPrev></td>
            <td><CardNumber flashcards={flashcards} currentCollection = {currentCollection} currentCard = {currentCard} /></td>
            <td><NextPrev setCurrentCard={setCurrentCard} flashcards = {flashcards} currentCard = {currentCard} click = {nextFlashcard} text = 'NEXT'></NextPrev></td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default App;