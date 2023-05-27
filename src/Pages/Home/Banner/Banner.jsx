import bannerImg from '../../../assets/HomeBanner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${bannerImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Wellcome to Mamon<span>Shop.</span></h1>
                    <p className="mb-5 px-36">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="btn btn-primary">Explore Our Shop</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;