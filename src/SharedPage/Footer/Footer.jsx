import webLogo from "../../assets/Add a heading (1).png";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="w-full text-gray-700 bg-gray-100 footer-border mt-12">
            <div
                className="container flex flex-col flex-wrap px-6 lg:px-16 py-16 pb-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center xl:mx-0 md:text-left mb-10 lg:mb-0">
                    <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                        <img src={webLogo} alt="Website logo" className="w-32 h-32 " />
                    </a>
                   <h1 className="mt-3 text-2xl font-semibold gradient-text-color">Awesome Tourist Spots</h1>
                </div>
                <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 lg:mt-6 xl:mt-0 md:text-left">
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                        <nav className="mb-10 list-none gradient-text-link">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Send a Message</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Request a Quote</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">+123-456-7890</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
                        <nav className="mb-10 list-none gradient-text-link">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Company</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Careers</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Blog</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                        <nav className="mb-10 list-none gradient-text-link">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Contact Support</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Help Resources</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer">Release Updates</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest uppercase title-font">Social media links</h2>
                        <nav className="mb-10 list-none mx-auto w-fit md:w-auto gradient-text-link">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer flex gap-2"><FaSquareFacebook className="w-6 h-6 text-blue-500" /><span>Facebook</span></a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer flex gap-2"><BsTwitterX className="w-5 h-5 text-black" /><span>Twitter</span></a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer flex gap-2"><SiInstagram className="w-6 h-6 text-black" />Instagram</a>
                            </li>
                        </nav>
                    </div>
                    
                </div>
            </div>
            <div className="px-0 -mb-[1px] bg-gradient-to-br from-[#f6c459] to-[#f871c0]">
                <div className="py-8 lg:py-4 ">
                    <p className="text-sm text-white capitalize text-center w-56 md:w-72 lg:w-auto mx-auto">© 2024 All rights reserved by Awesome Tourist Spots</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;