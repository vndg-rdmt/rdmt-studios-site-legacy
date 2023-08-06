import gsap from "gsap";
import STYLES from "../Styles";
import Configuration from "../../state/configuration";
import State from "../../state/state.js";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const styles = {
    Component: `
        background-color: #171D21;
        color: transparent;
        width: 0px;
        height: 0px;
        font-size: 12px;
        position: absolute;
        top: 74vh;`,
};

export default function CopyButton() {

    const Component = document.createElement('div');

    Component.textContent = 'PRESS TO COPY EMAIL';
    Component.style = `${STYLES.wrap} ${styles.Component}`;

    const MountAnimation = gsap.timeline({
        delay: '0.8',
    });
    MountAnimation.to(Component, {
        duration: '0',
        border: '2px solid #283F52',
    });
    MountAnimation.to(Component, {
        duration: '0.2',
        width: '266px',
        ease: 'steps(8)',
    });
    MountAnimation.to(Component, {
        duration: '0.7',
        height: '36px',
        ease: 'steps(4)',
    });
    MountAnimation.to(Component, {
        delay: '0.05',
        color: 'white',
        duration: '0',
    });

    // Click event
    const ClickAnimation = gsap.timeline({
        paused: 'true',
    });
    ClickAnimation.to(Component, {
        height: '0',
        border: '',
        duration: '',
        text: {
            value: '',
        },
        backgroundColor: 'white',
    });
    ClickAnimation.to(Component, {
        height: '36px',
        duration: '0.5',
        ease: 'steps(3)',
    });
    ClickAnimation.to(Component, {
        color: 'black',
        delay: '0.1',
        text: {
            value: 'COPIED TO CLIPBOARD',
        },
        duration: '0',
    });
    ClickAnimation.to(Component, {
        color: 'white',
        delay: '0.1',
        duration: '0',
    });
    ClickAnimation.to(Component, {
        color: 'black',
        delay: '0.1',
        duration: '0',
    });
    ClickAnimation.to(Component, {
        delay: '1',
        duration: '0',
        backgroundColor: '#171D21',
        border: '2px solid #283F52',
        text: {
            value: 'PRESS TO COPY EMAIL',
        },
        color: 'white',
    });

    Component.onmouseenter = () => { State.utils.ConnectAPI(Component, '_hover_') };

    Component.onclick = () => {
        
        navigator.clipboard.writeText(Configuration.contacts.email);
        ClickAnimation.play(0);
    };

    return Component;
};
