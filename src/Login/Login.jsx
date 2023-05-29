import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const logged ={email,password }
        console.log(logged)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                    <form onSubmit={handleLogin} className="card-body -mt-40 bg-base-400">
                        <h2 className="text-3xl font-bold">Login Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>New Here <Link className="text-red-500" to='/registration'>Registration Now</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;