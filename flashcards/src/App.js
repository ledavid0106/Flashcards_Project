import React, { useState } from 'react';

function App() {

    const [flashcards, setFlashcards] = useState([{word: "Dabin", definition: "EDM"}])

  return (
    <div>
      <table>
        <tbody>
          {flashcards.map((info, index)=>{
            return (
              <tr>
                <td>{index+1}</td>
                <td>{info.word}</td>
                <td>{info.definition}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
