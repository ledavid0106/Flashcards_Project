
const Card = (flashcards) => {
    return ( 
        <table>
            <tbody>
            {flashcards.flashcards.map((info, index)=>{
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
     );
}
 
export default Card;