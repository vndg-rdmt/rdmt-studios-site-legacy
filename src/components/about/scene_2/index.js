import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Essentials from "../../utils/Essentials";
gsap.registerPlugin(TextPlugin);

import Table from "./elements/table";
import Preload from "./elements/preload";
import BackButton from "../../utils/BackButton";

export default function Scene2(root) {

    gsap.to(root, {
        delay: '0.8',
        duration: '0.5',
        filter: 'blur(0.63px)'
    });
    root.append(Essentials(), Preload());
    setTimeout(()=>{ root.append(Table()) }, 9000);
    setTimeout(()=> { 
        const placeHolder = document.createElement('div');
        placeHolder.style = `
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 88vh;
            width: 100vw;`;
        placeHolder.appendChild(BackButton(root));
        root.appendChild(placeHolder)}, 16000);
}