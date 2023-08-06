import Essentials from "../components/utils/Essentials.js";
import Listing from "../components/library/Listing.js";
import Header from "../components/library/Header.js";
import Info from "../components/library/Info.js";
import BackButton from "../components/utils/BackButton";
import Cursor from "../components/utils/cursor";
import { Load } from "../components/utils/Redirection.js";

import forMobileDevices from "./forMobileDevices.js";

window.addEventListener('DOMContentLoaded', Init);

const root = document.getElementById('root');
forMobileDevices();
Essentials();
Load(root);

function Init() {

    setTimeout(()=>{
        document.getElementById('vendigo').dispatchEvent(new Event('loaded'));
        document.getElementById('borders').dispatchEvent(new Event('loaded'));
    }, 4000);
    
    setTimeout(()=>{
        Cursor(root, 2.5);
        root.appendChild(Header());
        root.appendChild(Listing());
        root.appendChild(Info());
        root.appendChild(BackButton(root));
    }, 6500);
};