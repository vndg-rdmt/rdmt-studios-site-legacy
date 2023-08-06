import gsap from "gsap";
import { Power2 } from "gsap";
import Vendigo from "../utils/Vendigo.js";
import Borders from "../utils/borders.js"

export function Unload(root, route) {

    const Unloader = document.createElement('div');
    Unloader.style = `position: fixed; z-index: 1000; width: 100vw; height: 100vh; bottom: -100vh;`;
    Unloader.style.backgroundColor = '#080808';
    
    document.body.appendChild(Unloader);

    const UnloadAnimation = gsap.timeline();
    UnloadAnimation.to(root, {
        scale: '0.93',
        duration: '0.9',
        ease: 'Power1.out',
        opacity: '0.5',
    });
    UnloadAnimation.to(root, {
        top: '-40vh',
        duration: '2'
    },'<+0.2');
    UnloadAnimation.to(Unloader, {
        bottom: '0vh',
        duration: '1.1',
        ease: Power2.easeInOut,
    }, '<-0.2');

    UnloadAnimation.eventCallback('onComplete', () => {
        let path;

        if (route) {
            path = `/${route}`;
        } else {
            path = '/';
        };

        window.location.assign(path);
    });

};

export function Load(root) {
    root.appendChild(Borders());
    root.appendChild(Vendigo());
};