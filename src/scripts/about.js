import Scene1 from "../components/about/scene_1";
import Scene2 from "../components/about/scene_2";
import Title from "../components/utils/Title";

import forMobileDevices from "./forMobileDevices.js";

forMobileDevices();

document.addEventListener('DOMContentLoaded', ()=>{

    const root = document.getElementById('root');
    root.appendChild(Title('ABOUT'))
    Scene1(root, ()=>{Scene2(root)});
    
});

