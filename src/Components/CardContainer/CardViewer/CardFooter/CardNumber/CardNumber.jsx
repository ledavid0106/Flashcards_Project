


const CardNumber = ({currentCollection,flashcards,currentCard}) => {
    return currentCollection ?(
        <div>
            <div>{currentCard+1}/{flashcards.length}</div> 
        </div>
    ): null;
}

export default CardNumber;