import React, { useState } from 'react';
import Card from './Components/CardContainer/CardViewer/Card/Card';

function App() {

    const [flashcards, setFlashcards] = useState([{word: "Dabin", definition: "EDM"}])

  return (
    <div>
      <Card flashcards={flashcards}/>
    </div>
  );
}

export default App;
