import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CatalogList() {
  const dispatch = useDispatch();
  const catalogReducer = useSelector((store) => store.catalogReducer);

  useEffect(() => {
    dispatch({ type: "GET_CATALOG" });
  }, []);

  return (
    <div>
      <h2>PLAYED GAMES</h2>
      {catalogReducer?.map((catalog) => (
        <CatalogItem key={catalog.id} catalog={catalog} />
      ))}
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


  const addDialog = (event) => {
    dispatch({type: 'UPDATE_CATALOG' , payload : {description: description , user_rating: rating, id: catalog.id}})
       event.preventDefault();
       setDescription("");
       setRating("")
    
   }

  const handleEditGame = () => {
    setShowDialog(true);
  };

  return (
    <div>
      <img src={catalog.image_url} alt="Game Cover" />
      {catalog.played_game_name}
      <section>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleEditGame}
        >
          Edit Game
        </button>
        {showDialog && (
          <dialog className="nes-dialog" open>
            <form method="dialog" onSubmit={addDialog}>
              <p>Description:</p>
           
              <input 
                className="nes-container" 
                type="text"
                placeholder= "Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                >
              </input>

              <p>Rating:</p>
              <input 
                className="nes-container" 
                type="text"
                placeholder= "Rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                >
              </input>
            
              <menu className="dialog-menu">
                <button className="nes-btn">Cancel</button>
                <button className="nes-btn is-primary" type = "submit" >Confirm</button>
              </menu>
            </form>
          </dialog>
        )}
      </section>
    </div>
  );
}

export default CatalogList;


