import React, { useEffect, useState } from 'react';
import Header from './CardViewer/CardHeader/Header';
import Card from './CardViewer/Card/Card';
import NextPrev from './CardViewer/CardFooter/PrevNext/PrevNext';
import CardNumber from './CardViewer/CardFooter/CardNumber/CardNumber';


const CardContainer = ({flashcards, getFlashcards, currentCard, setCurrentCard, currentCollection,}) => {
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
        <div className='card'>
        <Header className="header"currentCollection={currentCollection} getFlashcards ={getFlashcards} currentCard = {currentCard} flashcards = {flashcards} setCurrentCard = {setCurrentCard}/>
        <Card flashcards={flashcards} currentCard={currentCard}/>
        <table className='row'>
          <tbody className='space'>
            <tr className='space'>
              <div >
              <td ><NextPrev setCurrentCard={setCurrentCard} flashcards = {flashcards} currentCard = {currentCard} click = {prevFlashcard} text = 'PREV'></NextPrev></td>
              <td className='borders'><CardNumber flashcards={flashcards} currentCollection = {currentCollection} currentCard = {currentCard} /></td>
              <td><NextPrev setCurrentCard={setCurrentCard} flashcards = {flashcards} currentCard = {currentCard} click = {nextFlashcard} text = 'NEXT'></NextPrev></td>
              </div>
            </tr>
          </tbody>
        </table>    
        </div>
     );
}
 
export default CardContainer;