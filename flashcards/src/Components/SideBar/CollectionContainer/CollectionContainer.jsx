import Collection from "./Collection/Collection";
import React, { useState } from 'react';
import axios from 'axios';

const CollectionBar = ({setCurrentSelections, collections, currentCollection}) => {


    return (  
        <div>
            <div>
                <div>
                    <div>Collections</div>
                    <div> 
                        <div>
                           {collections.map((collection,i) => {
                               return(
                                   <span className='collection' key = {i}>
                                    <Collection collection = {collection} setCurrentSelections = {setCurrentSelections}/>
                                    </span>
                                )
                            })} 
                        </div>
                    </div>
                </div>
                <div >{currentCollection.title} Collection</div>
            </div>
        </div>
    );
}
 
export default CollectionBar;