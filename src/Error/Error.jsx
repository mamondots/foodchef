import { Link } from 'react-router-dom';
import image from '../assets/Frame.png'

const Error = () => {
    return (
        <div className='flex justify-center items-center mt-12 flex-col'>
            <img src={image} alt="" />
            <Link className='text-2xl px-12 py-6 bg-red-500 text-white' to='/'>BACK TO HOME</Link>
        </div>
    );
};

export default Error;