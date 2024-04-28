import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import toast, { Toaster } from "react-hot-toast";
import "./Navber.css";
import { useEffect, useState } from "react";
import userDefaultImg from "../../assets/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg";
import logo from '../../assets/Add a heading (1).png'

const Navber = () => {
    const { user, signOutUser } = useAuthContext();
    console.log(user)
    const [userImg, setUserImg] = useState(userDefaultImg);

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add_tourists_spot'}>Add Tourist Spots</NavLink></li>
        <li><NavLink to={'/all_tourists_spot'}>All Tourist Spots</NavLink></li>
        <li><NavLink to={'/my_list'}>My Lists</NavLink></li>
    </>

    const handleSingOut = () => {
        signOutUser()
        toast.success('You have signed out successfully');
    };

    useEffect(() => {
        if (user?.photoURL?.includes('http')) {
            setUserImg(user?.photoURL);
        }
        else {
            setUserImg(userDefaultImg)
        }
    }, [user?.photoURL])

    return (
        <div className="navbar bg-base-100 border">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-medium flex justify-center items-center gap-2">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                    <span>Awesome Tourist Spots</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {
                    user ?
                        <>
                            <div className="profile">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={userImg} className="" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="profile-name mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52">
                                    <li>{user?.displayName}</li>
                                </ul>
                            </div>

                            <button onClick={handleSingOut} className="btn">Sign out</button>

                        </> :
                        <>
                            <Link to={'/sign_in'} className="btn">Sign In</Link>
                            <Link to={'/register'} className="btn">Register</Link>
                        </>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default Navber;