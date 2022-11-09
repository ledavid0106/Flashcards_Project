



const Card = (flashcards) => {
    return ( 
        <table>
            <tbody>
            {flashcards.flashcards.map((info)=>{
                return (    
                <tr>
                    <td>{info.word}</td>
                    <td>{info.definition}</td>
                </tr>
                )
            })}
            </tbody>
        </table>
     );
}
 
export default Card;