import configuration from "../../state/configuration.js";
import State from "../../state/state.js";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin)

const styles = {

    Component: `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 60vw;
        min-width: 870px;
        gap: 20px;
        position: absolute;`,

    Button: `
        padding: 11px;
        height: 36px;
        width: 100%;
        text-align: center;
        border: 1px solid white;`,
};

export default function Header() {
    
    const Button = (value) => {

        // Init component
        const Component = document.createElement('div');
        Component.style = styles.Button;
        Component.textContent = `${value}`;
        Component.setAttribute('data', `${value}`);
        Component.onmouseenter = () => { State.utils.ConnectAPI(Component, '_hover_') };

        // Changing state
        if(!State.library.Header) {
            
            State.library.Header = Component;       // What component opened
            State.library.Grab_Data = value;        // Where to grab data to render list

            Component.className = `active`;         // Component active state
        } else {
            Component.classList = `white_text`;     // Component default state
        };
        const mount = gsap.timeline({
            delay: '2',
        });
        mount.from(Component, {
            height: '0px',
            padding: '0px',
            duration: '0.5',
            ease: 'steps(3)',
        });
        mount.from(Component, {
            text: {
                value: '',
            },
            duration: '0.6',
        });
        mount.eventCallback

        Component.onclick = () => {
            State.OpenHeader(Component);            // Change opened component and re-render list
        };

        return Component;
    };

    const Component = document.createElement('div');
    Component.style = styles.Component;
    Component.id = 'Header';

    const mount = gsap.timeline({
            delay: '0.7',
        });
    mount.from(Component, {
        opacity: '0',
        width: '0px',
        minWidth: '0px',
        duration: '1.3',
        ease: 'power2.out',
    });
    mount.eventCallback(()=>{
        Component.style.width = "60vw";
    })

    configuration.library.Header.forEach((value)=>{ // Parse config to render all Header titles
        Component.appendChild(Button(value));
    });

    return Component;
};