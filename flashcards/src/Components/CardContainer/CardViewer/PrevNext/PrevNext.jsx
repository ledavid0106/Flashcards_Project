
const NextPrev = ({setCurrentCard,flashcards,currentCard,click,text}) => {
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

    return flashcards[0].word? ( 
        <div onClick = {click}>{text}</div>
     ):<div ></div>;
}
 
export default NextPrev;