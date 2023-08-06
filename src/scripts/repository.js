import Essentials from "../components/utils/Essentials.js";
import Card from "../components/repository/Card";
import List from "../components/repository/List";
import BackButton from "../components/utils/BackButton";
import Cursor from "../components/utils/cursor";
import { Load } from "../components/utils/Redirection.js";

import forMobileDevices from "./forMobileDevices.js";

document.addEventListener('DOMContentLoaded', Init);

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
        root.appendChild(List());
        root.appendChild(Card());
        root.appendChild(BackButton(root));
        Cursor(root, 3);
    }, 6000);
}