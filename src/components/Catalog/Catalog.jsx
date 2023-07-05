import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Catalog.css'


function CatalogList() {
  const dispatch = useDispatch();
  const catalogReducer = useSelector((store) => store.catalogReducer);

  useEffect(() => {
    dispatch({ type: "GET_CATALOG" });
  }, []);

  return (
    <div className="returnBody">
      <h2>PLAYED GAMES</h2>

    
    <div className="mapContainer">
      {catalogReducer?.map((catalog) => (
       
        <CatalogItem key={catalog.id} catalog={catalog} />
     
      ))}
    </div>
    </div>
  );
}

function CatalogItem({ catalog }) {
  console.log('catalog is', catalog)
  console.log('catalog.id is', catalog.id)
  const [showDialog, setShowDialog] = useState(false);
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false)
  //const [hover, setHover] = useState(null)

  



  const handleConfirm = (event) => {
    dispatch({type: 'UPDATE_CATALOG' , payload : {description: description , user_rating: rating, id: catalog.id}})
       event.preventDefault();
       setDescription("");
       setRating("")
       setShowDialog(false);
    
   }
   const handleCancel = () => {
    setShowDialog(false);
  };

  const handleEditGame = (event) => {
    event.stopPropagation(); // Stop event propagation
    setShowDialog(true);
  };
  console.log('im clicked', handleEditGame)

  return (
    <div >
      <div className="gameContainer">

      
      <div  onClick={() => setClicked(!clicked)}>
        {clicked ? (
          <>
     
           <p><b>description: </b>{catalog.description}</p>
        <p> <b>rating:</b> {catalog.rating}</p>
       
        
        </> )  :  
        (
        <>
     
        <img src={catalog.image_url} alt="Game Cover" style={{ width: '300px', height: 'auto' }} />
        <br /><br />
         <p>{catalog.played_game_name}</p> 
   
       
        </>)}
      </div>
  
      
    
     
    <div>
        <button
          type="button"
          className="nes-btn is-primary editBtn"
          onClick={handleEditGame}
          
        >
           <div className="gg-pen"></div>
        </button>
        </div>
    
        </div>

        {showDialog && (
          <dialog className="nes-dialog dialogBox" open>
            <form method="dialog" onSubmit={handleConfirm}>
              <p>Description:</p>
           
              <input 
                className="nes-container" 
                type="text"
                placeholder= "Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                >
                  
              </input>
              <br /><br />
              <p>Rating: {rating}</p>
              {/* <input 
                className="nes-container" 
                type="text"
                placeholder= "Rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                >
                  
              </input> */}
              <div>
              <div> 
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key = {i}> 
                <input type = "radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                style={{ display: "none" }}
                />
                <i
                  className={`nes-icon is-large star ${ratingValue <= rating ? "" : "is-transparent"}`}
                  style={{ fontSize: 100 }}
                />

             </label>
             

            )
        })}
           

    </div>
              </div>
            
              <menu className="dialog-menu">
                <button className="nes-btn" onClick={handleCancel}>Cancel</button>
                <button className="nes-btn is-primary" type = "submit" >Confirm</button>
              </menu>
            </form>
          </dialog>
        )}
      
     
    </div>
  );

}

export default CatalogList;


