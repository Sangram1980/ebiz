import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const addressdata = [
    {
        id: "UAE",
        ctitle: "Elevate business Solutions DMCC",
        cdetails: "Address: Office No: 807, Exchange Tower, Business Bay, Po Box No: 336293 Dubai, United Arab Emirates",
        
    },
    {
        id: "USA",
        ctitle: "Elevate business Solutions DMCC",
        cdetails: " 336293 Dubai, United Arab Emirates",
        
    },
    {
        id: "UK",
        ctitle: "Elevate business Solutions DMCC",
        cdetails: " Po Box No: dka;ks;dlf Dubai, United Arab Emirates",
        
    }
];

const listdata = [
    "E-Commerce Development",
    "Website Development",
    "Android/iOS App Development",
    "Digital Marketing",
    "Marketplace Optimization"
];


const smdata = [
    {
        link: "https://www.facebook.com",
        icon: <FaFacebookF/>
    },
    {
        link: "https://www.twitter.com",
        icon: <BsTwitter/>
    },
    {
        link: "https://www.linkedin.com",
        icon: <FaLinkedinIn/>
    },    
];

export {
    addressdata,
    listdata,
    smdata
}
