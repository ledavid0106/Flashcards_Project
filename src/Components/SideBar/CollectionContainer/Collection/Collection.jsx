import "./Collectionsss.css"
const Collection = ({collection,setCurrentSelections}) => {
    const handleClick = () => {
        setCurrentSelections(collection);
        

    }
    return ( 
      <div className="border" onClick = {handleClick}>
        {collection.title}
        <div className="grey">test</div>
      </div>
    );
}
 
export default Collection;