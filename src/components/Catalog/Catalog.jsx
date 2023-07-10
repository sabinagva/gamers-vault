import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Catalog.css";

function CatalogList() {
  const dispatch = useDispatch();
  const catalogReducer = useSelector((store) => store.catalogReducer);

  useEffect(() => {
    // Fetch catalog data when the component mounts on page load
    dispatch({ type: "GET_CATALOG" });
  }, []);

  const user = useSelector((store) => store.user);

  return (
    <div className="returnBody">
      {/* Allows name change based on user login */}
      <h2>
        {" "}
        <span className="user">{user.username}'s </span> PLAYED GAMES
      </h2>
      {/* going through catalog of games to render  */}
      <div className="mapContainer">
        {catalogReducer?.map((catalog) => {
          const cImage = catalog.image_url;
          const finalUrl =
            cImage && cImage.replace("/t_thumb/", "/t_cover_big/");
          return (
            <CatalogItem
              key={catalog.id}
              catalog={catalog}
              finalUrl={finalUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

function CatalogItem({ catalog, finalUrl }) {
  const [showDialog, setShowDialog] = useState(false);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleConfirm = (event) => {
    // Handle confirmation of edits
    dispatch({
      type: "UPDATE_CATALOG",
      payload: {
        description: description,
        user_rating: rating,
        id: catalog.id,
      },
    });

    event.preventDefault();
    //emties out the inputs after submit
    setDescription("");
    setRating("");
    //gets rid of the dialogue box after confirm
    setShowDialog(false);
  };

  const handleCancel = () => {
    // gets rid of the dialogue box after cancel
    setShowDialog(false);
  };

  const handleEditGame = (event) => {
    //brings the dialogue box on click
    event.stopPropagation(); // Stop event propagation
    setShowDialog(true);
  };

  return (
    <div>
      {/* conditionally renders back side of the game cards on click */}
      <div className="gameContainer">
        <div onClick={() => setClicked(!clicked)}>
          {clicked ? (
            <>
              <div className="imgBackside">
                <p className="description">
                  <b>description:</b> {catalog.description}
                </p>
                <p>
                  {" "}
                  <b>rating:</b> {catalog.rating}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* renders the game name and card image  */}
              <img
                className="gameImg with title"
                src={finalUrl}
                alt="Game Cover"
                style={{ width: "300px", height: "300px" }}
              />
              <br />
              <br />
              <p>{catalog.played_game_name}</p>
            </>
          )}
        </div>

        <div>
          {/* edit button to add description and rating */}
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
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></input>
            <br />
            <br />
            <p>Rating: {rating}</p>
            <div>
              <div>
                {/* star rating functionality  */}
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        style={{ display: "none" }}
                      />
                      <i
                        className={`nes-icon is-large star ${
                          ratingValue <= rating ? "" : "is-transparent"
                        }`}
                        style={{ fontSize: 100 }}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <menu className="dialog-menu">
              <button className="nes-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="nes-btn is-primary" type="submit">
                Confirm
              </button>
            </menu>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default CatalogList;
