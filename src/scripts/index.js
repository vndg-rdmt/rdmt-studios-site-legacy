import Navigation from "../components/index/Navigation.js";
import Essentials from "../components/utils/Essentials";
import Cursor from "../components/utils/Cursor.js"

import forMobileDevices from "./forMobileDevices.js";
import IndexPreloader from "../components/index/IndexPreloader.js";
import Title from "../components/utils/Title.js";

const root = document.getElementById('root');

document.addEventListener('DOMContentLoaded', FirstPrelaoder);
forMobileDevices();
Essentials();

function Init() {

    root.appendChild(Navigation(root))
};

function APC() {
    Cursor(root, 1.3);
}

function FirstPrelaoder() {
    
    if (window.sessionStorage.getItem("alreadyVisited")) {
        Cursor(root, 0);
        Init();
        root.appendChild(Title('TERMINAL'));
    } else {
        IndexPreloader(root, Init, APC);
    }
}