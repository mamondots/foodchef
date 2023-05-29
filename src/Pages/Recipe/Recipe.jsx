import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../RecipeCard/RecipeCard";


const Recipe = () => {
   const recipes = useLoaderData()
   const { picture, name, experience, numbers, likes,description,recipe } = recipes
  
    return (
        <div>
           <div className="card card-compact  bg-base-100 my-12">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Chef Name:{ name}</h2>
                <p>Years of experience:{experience}</p>
                <p>Numbers of recipes:{numbers}</p>
                <p>Total Likes:{likes}</p>
                <p>{description}</p>
                <p className="grid lg:grid-cols-3 gap-6 mt-12">{
                   recipe.map(smcard => <RecipeCard
                   key={smcard.id}
                    smcard={smcard}
                   >

                   </RecipeCard>)
                }</p>
            </div>
        </div>
        </div>
    );
};

export default Recipe;