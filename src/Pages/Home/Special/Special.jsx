import img01 from '../../../assets/img01.jpg'
import img02 from '../../../assets/img02.jpg'

const Special = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold pb-6">Special Items</h2>
            <div className="grid lg:grid-cols-2 gap-8 pb-16">
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img01} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Chicken Grill
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                        Lorem Ipsum is simply dummy industry.
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline hover:btn-primary cursor-pointer">Order Now</div>
                            <div className="badge badge-outline hover:btn-primary cursor-pointer">Add to cart</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src={img02} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Meat Griller
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                        Lorem Ipsum is simply dummy industry.
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline hover:btn-primary cursor-pointer">Order Now</div>
                            <div className="badge badge-outline hover:btn-primary cursor-pointer">Add to cart</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Special;