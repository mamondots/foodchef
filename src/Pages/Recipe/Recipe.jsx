import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../RecipeCard/RecipeCard";

const Recipe = () => {
   const recipes = useLoaderData()
   const { picture, name, experience, numbers, likes,description } = recipes
  
    return (
        <div>
           <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Chef Name:{ name}</h2>
                <p>Years of experience:{experience}</p>
                <p>Numbers of recipes:{numbers}</p>
                <p>Total Likes:{likes}</p>
                <p>{description}</p>
            </div>
        </div>
        </div>
    );
};

export default Recipe;