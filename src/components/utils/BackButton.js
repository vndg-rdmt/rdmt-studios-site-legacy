import { Unload } from "./redirection";
import State from "../../state/state";
import gsap from "gsap";

const styles = {
    
    Component: `
        z-index: 5000;
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: top;
        align-items: top;
        bottom: 7vh;
        height: 25px;`,
        
    button: `
        padding-bottom: 5px;
        height: min-content;
        color: cyan;
        font-size: 12px;`,
    text: `
        color: white;
        font-size: 12px;`,
};

export default function BackButton(root) {
    
    const button = document.createElement('div');
    button.style = styles.button;
    button.className = 'back_button';
    button.textContent = 'GO BACK TO';

    const text = document.createElement('div');
    text.style = styles.text;
    text.textContent = `TERMINAL`;

    const __white_space = document.createElement('div');
    __white_space.style = styles.text;
    __white_space.innerHTML = `&nbsp . &nbsp. &nbsp. &nbsp. &nbsp. &nbsp`;

    const Component = document.createElement('div');
    Component.style = styles.Component;

    Component.appendChild(button);
    Component.appendChild(__white_space);
    Component.appendChild(text);

    button.onmouseenter = () => { State.utils.ConnectAPI(Component, '_hover_') };

    button.onclick = () => { Unload(root) };

    gsap.from(Component, {
        delay: '0.7',
        opacity: '0',
        duration: '1',
    })
    

    return Component;
};