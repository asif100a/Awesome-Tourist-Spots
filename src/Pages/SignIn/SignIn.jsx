import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
import logo from "../../assets/Add a heading (1).png";
import "./signIn.css";

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
        <div className="min-h-full flex items-center justify-center">
            <div className="p-0 w-fit form-border mx-3">
                <div className="w-auto md:w-[424px] m-6 rounded-lg">
                    <div className="flex justify-center mb-8">
                        <img src={logo} alt="Awesome Tourist Spots" className="w-30 h-20" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-500 mb-8">Sign In Your Account</h1>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
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
                            className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                        />
                        {<span className="text-red-600">{passwordError}</span>}
                        <div className="flex justify-end text-xs text-[#f5b834] dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <input type="submit" value={'Sign in now'} className="w-32 hover:cursor-pointer bg-gradient-to-br from-[#f6c459] to-[#f871c0] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f871c0] mb-2" />
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
                <p className=" text-center text-sm sm:px-6 dark:text-gray-600"><span className="mr-2">{donNot} have an account?</span>
                    <Link to="/register" className="text-[#f871c0] hover:underline">Register now</Link>
                </p>
                <Toaster />
            </div>
        </div>
        </div>
    );
};

export default SignIn;