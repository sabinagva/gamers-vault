const { useSelector, useDispatch } = require("react-redux")

const SearchResult = () => {
    const gameListReducer = useSelector(store => store.gameListReducer)
    const dispatch =useDispatch();

    return (
        <div>
            {/* {gameListReducer.map((game,i) =>(
                <div key={i}>
                    <img src={game.}></img>

                </div>
            ))} */}
        </div>
    )
}
export default SearchResult