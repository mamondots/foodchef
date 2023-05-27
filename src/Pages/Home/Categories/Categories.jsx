import img01 from '../../../assets/img01.jpg'
import img02 from '../../../assets/img02.jpg'
import img03 from '../../../assets/img03.jpg'
import img04 from '../../../assets/img04.jpg'

const Categories = () => {
    return (
        <div className="pb-8">
            <h2 className="text-3xl font-bold">Chose The Food</h2>
            <div className="mt-4 grid lg:grid-cols-4 gap-6">
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img01} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thai Food</h2>
                        <p>Lorem Ipsum is simply dummy industry.</p>
                        <div className="">
                            <button className="btn btn-primary">Viwe More</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img02} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Indian Food</h2>
                        <p>Lorem Ipsum is simply dummy industry.</p>
                        <div className="">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img03} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Chinis Food</h2>
                        <p>Lorem Ipsum is simply dummy industry.</p>
                        <div className="">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={img04} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Desi Food</h2>
                        <p>Lorem Ipsum is simply dummy industry.</p>
                        <div className="">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;