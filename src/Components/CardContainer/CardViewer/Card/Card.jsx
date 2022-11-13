import { useEffect, useState } from 'react';
import './Card.css';


const Card = ({flashcards,currentCard}) => {
    const [display,setDisplay] = useState(flashcards[currentCard].word);
    const [word,setWord] = useState(true);
    const [classStyle,setClassStyle] = useState('words');

    useEffect(() => {
        setDisplay(flashcards[currentCard].word);
        setClassStyle('words')
        setWord(true);
    },[flashcards,currentCard])
    
    const handleClick = () => {
        if (word) {
            setDisplay(flashcards[currentCard].definition);
            setWord(false);
            setClassStyle('definitions');
        }
        else {
            setDisplay(flashcards[currentCard].word);
            setWord(true);
            setClassStyle('words');
        }
    }

    return flashcards[0].word? (  
        <div className="bold">
        <div onClick = {handleClick}>
            <div className={classStyle}>
            {display}
            </div>
        </div>
        </div>
    ): <div></div>;
}
 
export default Card;