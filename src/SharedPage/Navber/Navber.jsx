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
        <div className="navbar bg-base-100 gradient-border-bottom">
            <div className="flex flex-row-reverse lg:flex-row lg:navbar-start w-full justify-between">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 top-8 mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {
                            user ? <li><button onClick={handleSingOut}>Sign out</button></li> :
                                <>
                                    <li><NavLink to={'/sign_in'}>Sign In</NavLink></li>
                                    <li><NavLink to={'/register'}>Register</NavLink></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to={'/'} className="text-3xl gradient-text-color font-semibold flex justify-center items-center gap-2">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                    <span>Awesome Tourist Spots</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-3 hidden lg:flex">
                {
                    user ?
                        <>
                            <div className="h-[37px] w-[84px] flex justify-center items-center bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-[9px]">
                                <button onClick={handleSingOut} className="btn h-[34px] min-h-[34px] px-[14px] bg-white outline-none border-none shadow-none hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:text-white">Sign out</button>
                            </div>

                            <div className="profile w-fit h-fit rounded-full flex justify-center items-center p-[2px] bg-white transition-background duration-1000 hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0]">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle h-[44px] min-h-0 w-[44px] bg-gradient-to-br from-[#f6c459] to-[#f871c0] avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={userImg} className="" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="profile-name mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-36">
                                    <li><p>{user?.displayName}</p></li>
                                </ul>
                            </div>

                        </> :
                        <>
                            <Link to={'/sign_in'}>
                                <div className="h-[37px] w-[74.8px] flex justify-center items-center bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-[9px]">
                                    <button className="btn h-[34px] min-h-[34px] px-[14px] bg-white outline-none border-none shadow-none hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:text-white">Sign In</button>
                                </div>
                            </Link>

                            <Link to={'/register'}>
                                <div className="h-[37px] w-[82.5px] flex justify-center items-center bg-gradient-to-br from-[#f6c459] to-[#f871c0] rounded-[9px]">
                                    <button className="btn h-[34px] min-h-[34px] px-[14px] bg-white outline-none border-none shadow-none hover:bg-gradient-to-br hover:from-[#f6c459] hover:to-[#f871c0] hover:text-white">Register</button>
                                </div>
                            </Link>
                        </>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default Navber;