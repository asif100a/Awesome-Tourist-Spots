import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import logo from "../../assets/Add a heading (1).png";
import "./register.css";

const Register = () => {
    const navigate = useNavigate();
    const { registerUser } = useAuthContext();
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {
            name,
            email,
            photo_url,
            password,
            confirmPassword
        } = data;

        setPasswordError("");
        setConfirmPasswordError("");

        if (password.length < 6) {
            return setPasswordError('You should provide at least 6 character of password');
        }
        else if (!/[A-Z]/.test(password)) {
            return setPasswordError('You should provide at least 1 character of Uppercase');
        }
        else if (!/[a-z]/.test(password)) {
            return setPasswordError('You should provide at least 1 character of Lowercase')
        }
        else if (password !== confirmPassword) {
            return setConfirmPasswordError('Confirm password must be same with the password');
        }

        // Register user in the firebase
        registerUser(email, password)
            .then(crediential => {
                console.log(crediential?.user);
                updateProfile(crediential.user, {
                    displayName: name,
                    photoURL: photo_url
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.error(err.message);
                    })

                if (crediential.user) {
                    toast.success('You have registered successfully');
                    setTimeout(() => {
                        navigate('/');
                    }, 5000);
                }
            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.warn('You have already registered');
                }
                else if (err.message === "Firebase: Error (auth/network-request-failed).") {
                    toast.error('Please check your internet connection');
                }
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-0 w-fit form-border mx-3">
                <div className="w-auto md:w-[424px] m-6 rounded-lg">
                    <div className="flex justify-center mb-8">
                        <img src={logo} alt="Awesome Tourist Spots" className="w-30 h-20" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-500 mb-8">Register Your Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                placeholder="Enter your name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photo_url" className="block mb-2 text-sm text-gray-600">Your Photo url</label>
                            <input
                                type="text"
                                id="photo_url"
                                name="photo_url"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                placeholder="Enter your photo url"
                                {...register("photo_url", { required: true })}
                            />
                            {errors.photo_url && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Your Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            {<span className="text-red-600">{passwordError}</span>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600">Confirm Your Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-3 py-2 border border-[#f6c459] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f871c0]"
                                placeholder="Confirm your password"
                                {...register("confirmPassword", { required: true })}
                            />
                            {errors.confirmPassword && <span className="text-red-600">This field is required</span>}
                            {<span className="text-red-600">{confirmPasswordError}</span>}
                        </div>
                        <input type="submit" value={'Register now'} className="w-32 hover:cursor-pointer bg-gradient-to-br from-[#f6c459] to-[#f871c0] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f871c0] mb-2" />
                    </form>
                    <div className="text-center">
                        <p className="text-sm">Already have an account? <Link to="/sign_in" className="text-[#f871c0] hover:underline">Sign in now</Link></p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Register;