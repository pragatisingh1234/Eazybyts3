import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import { LuMailOpen, LuNavigation, LuPhoneCall } from "react-icons/lu";

const TopBar = () => {
    return (
        
        <div className="bg-emerald-500 py-2 overflow-hidden">
            <div className="flex justify-between max-w-7xl px-4 md:px-8 lg:px-12 mx-auto">
                <ul className="flex text-sm text-gray-200 gap-3">
                    <li className="hidden md:flex justify-center items-center gap-2">
                        <LuNavigation className="inline"/>
                        <h3>Eventoman</h3>
                    </li>
                    
                    <li className="flex justify-center items-center gap-2">
                        <LuMailOpen className="inline"/>
                        <a href="mailto:info@dreamcraft.com">eventoman123@gmail.com</a>
                    </li>
                </ul>
                <ul className="flex text-md text-gray-200 gap-3">
                    <li><a href="https://facebook.com"><FaFacebookF /></a></li>
                    <li><a href="https://twitter.com"><FaSquareXTwitter /></a></li>
                    <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
                    <li><a href="https://snap.com"><FaWhatsapp /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default TopBar;