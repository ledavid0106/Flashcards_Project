const Collection = ({collection,setCurrentSelections}) => {
    const handleClick = () => {
        setCurrentSelections(collection);
    }
    return ( 
      <div onClick = {handleClick}>
        {collection.title}
      </div>
    );
}
 
export default Collection;