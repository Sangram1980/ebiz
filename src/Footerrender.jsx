import {
    smdata,
    listdata
}
    from "./Footerdata";

import { CgArrowLongRightE } from "react-icons/cg";

const Services = () => {
    listdata.map((val) => {
        return (
            <li className="ftrlicls">
                <span className="ftricon">
                    <CgArrowLongRightE />
                </span>
                <a href="#">{val}</a>
            </li>
        );
    })
}
const SocialMedia = () => {
    smdata.map((val) => {
        return (
            <span className="topscl">
                <a href={val.link}>{val.icon}</a>
            </span>
        )
    })
}
export {
    Services,
    SocialMedia
}