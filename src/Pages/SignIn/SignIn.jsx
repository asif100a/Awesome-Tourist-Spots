import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

const SignIn = () => {
    const donNot = "Don't";
    const navigate = useNavigate();
    const location = useLocation();

    const { signInUser, googleSignIn } = useAuthContext();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        // Reset error
        setEmailError("");
        setPasswordError("");

        if(email === "") {
            return setEmailError('Please give your email to sign in')
        }
        else if(password === "") {
            return setPasswordError('Please give your password to sign in')
        }

        signInUser(email, password)
            .then(crediential => {
                console.log(crediential.user);
                if (crediential.user) {
                    toast.success('You have signed in successfully');
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }
            })
            .catch(err => {
                console.error(err.message);
                if(err.message === "Firebase: Error (auth/invalid-credential).") {
                    toast.error('Invalid email or password')
                }
            });
    };

    // Google sign in method
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(crediential => {
                console.log(crediential.user);
                if (crediential.user) {
                    toast.success('You have signed in successfully');
                    setTimeout(() => {
                        if(location.state) {
                            navigate(location.state);
                        }
                        else{
                            navigate('/');
                        }
                    }, 3000);
                }
            })
            .catch(err => {
                console.error(err.message);
                
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign In Your Account</h1>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"
                        />
                        {<span className="text-red-600">{emailError}</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border"
                        />
                        {<span className="text-red-600">{passwordError}</span>}
                        <div className="flex justify-end text-xs dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="btn btn-primary block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-lg dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className="w-8 h-8" />
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <FaXTwitter className="w-7 h-7" />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <FiGithub className="w-7 h-7" />
                    </button>
                </div>
                <p className=" text-center sm:px-6 dark:text-gray-600"><span className="mr-2">{donNot} have an account?</span>
                    <Link to="/register" className="text-blue-600 hover:underline">Register now</Link>
                </p>
                <Toaster />
            </div>
        </div>
    );
};

export default SignIn;