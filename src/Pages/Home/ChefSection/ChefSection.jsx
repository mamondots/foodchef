import { useEffect, useState } from "react";
import ChefCards from "../../../ChefCards/ChefCards";



const ChefSection = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/cards')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold">Chef Section</h2>
            <div className="grid lg:grid-cols-3 lg:gap-8 gap-6 mt-8">
                 {
                    chefs.map(chef => <ChefCards
                    key={chef.id}
                    chef={chef}
                    ></ChefCards>)
                 }
            </div>
        </div>
    );
};

export default ChefSection;