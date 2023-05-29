import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleToSubmite = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        const user ={name,email,password,photoUrl}
        console.log(user)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <form onSubmit={handleToSubmite} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                    <div className="card-body bg-base-400">
                        <h2 className="text-3xl font-bold">Registration Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email'required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password'required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Photo</span>
                            </label>
                            <input type="url" name='photoUrl'required placeholder="Upload Photo" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-primary" type="submit" value="Registration" />
                        </div>
                        <p>Have An Account <Link className="text-red-500" to='/login'>Login Now</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;