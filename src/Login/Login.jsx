import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

import { FaGooglePlusG,FaGithub } from 'react-icons/fa';


const Login = () => {

    const { singIn } = useContext(AuthContext)
    const { googleSingIn } = useContext(AuthContext)
    const {githubSingIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const logged = { email, password }
        console.log(logged)
        singIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }

    const handlegoogle = () => {
        googleSingIn()
            .then(result => {
                const user = result.user
                console.log(user)

            })
            .catch(error => console.log(error))
    }


    const handleGithubSingIn = () => {
        githubSingIn()

        .then(result => {
            const GitUser = result.user
            console.log(GitUser)

        })
        .catch(error => console.log(error))
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
                        <div>
                             <h2 className="text-center">Sing In with other</h2>
                             <div className="flex w-12 ml-12 mt-4">
                                 <p onClick={handlegoogle} className="p-2 text-white bg-slate-600 text-2xl cursor-pointer "><FaGooglePlusG></FaGooglePlusG></p>
                                 <p onClick={handleGithubSingIn} className="p-2 text-white bg-slate-600 text-2xl ml-2 cursor-pointer "><FaGithub></FaGithub></p>
                             </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;