import { Link } from "react-router-dom";


const ChefCards = ({ chef }) => {

    const { picture, name, experience, numbers, likes,id } = chef

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Chef Name:{ name}</h2>
                <p>Years of experience:{experience}</p>
                <p>Numbers of recipes:{numbers}</p>
                <p>Total Likes:{likes}</p>
                <div className="flex py-4">
                    
                    <Link className="btn btn-primary" to={`/recipe/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCards;