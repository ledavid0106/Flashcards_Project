import React from 'react';


const Header = (prop) => {
    return ( 
        <div >
            <div >Flashcards</div>
            <table>
                <tbody>
                    <tr>
                        <td>Add Card</td>
                        <td>Edit Card</td>
                        <td>Delete Card</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Header;