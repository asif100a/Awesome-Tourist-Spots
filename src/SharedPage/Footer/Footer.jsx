import webLogo from "../../assets/Add a heading (1).png";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="w-full text-gray-700 bg-gray-100 body-font mt-12">
            <div
                className="container flex flex-col flex-wrap px-5 py-16 pb-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                        <img src={webLogo} alt="Website logo" className="w-32 h-32" />
                    </a>
                   <h1 className="mt-3 text-2xl font-semibold">Awesome Tourist Spots</h1>
                </div>
                <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">Social media links</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900 flex gap-2"><FaSquareFacebook className="w-6 h-6 text-blue-500" /><span>Facebook</span></a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900 flex gap-2"><BsTwitterX className="w-5 h-5 text-black" /><span>Twitter</span></a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900 flex gap-2"><SiInstagram className="w-6 h-6 text-black" />Instagram</a>
                            </li>
                        </nav>
                    </div>
                    
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm text-gray-700 capitalize xl:text-center">© 2024 All rights reserved by Awesome Tourist Spots</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;