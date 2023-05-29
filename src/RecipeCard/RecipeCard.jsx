import { useState } from "react";
import Swal from "sweetalert2";


const RecipeCard = ({ smcard }) => {
    const { recipeName, ingredients, cookingMethod, rating } = smcard
    const [isDisable, setIsDisable] = useState(false)
    const handleDisble = () =>{
        setIsDisable(!isDisable)
        Swal.fire('Adding your favorite Recipe')
    }
    return (
        <div className="">
            <div className="card  bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Recipe Name:{recipeName}</h2>
                    <p className="">
                    Ingredients: {ingredients}
                    </p>
                    <p>Cooking Method: {cookingMethod}</p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions">
                        <button onClick={handleDisble} disabled={isDisable} className="btn btn-primary">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;