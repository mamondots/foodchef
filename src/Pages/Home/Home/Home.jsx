import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import ChefSection from "../ChefSection/ChefSection";
import Special from "../Special/Special";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <Categories></Categories>
            <Special></Special>
        </div>
    );
};

export default Home;