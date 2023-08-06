import Configuration from "../../state/configuration";
import Button from "./button";
import { Unload } from "../utils/Redirection";
import State from "../../state/state";

import "./style.css";

export default function Navigation(root) {

    const Component = document.createElement('nav');
    Component.id = 'conduit';

    Configuration.system.pages.forEach((item, index) => {
    
        const temp = Button(item._title, `${index}`);
        temp.onclick = () => {Unload(root, item._route)};
        temp.onmouseover = () => { State.utils.ConnectAPI(Component, '_hover_') };

        Component.appendChild(temp);
    });

    return Component
}