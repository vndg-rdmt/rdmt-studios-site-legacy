import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { Load } from "./Redirection";
gsap.registerPlugin(TextPlugin);

function Loading_Icon_Constructor() {

    const Component = document.createElement('div');
    Component.style = `
        color: white;
        font-size: 14px;
        text-align: center;
        text-align: left;`;

    Component.textContent = '.'
    
    const DELAY = 0.2;

    const animation = gsap.timeline({
        repeat: -1,
        repeatDelay: DELAY,
    });
    animation.to(Component, {
        delay: DELAY,
        duration: '0',
        text: '..',
    });
    animation.to(Component, {
        delay: DELAY,
        duration: '0',
        text: '...',
    });
    animation.to(Component, {
        delay: DELAY,
        duration: '0',
        text: '....',
    });

    const wrapper = document.createElement('div');
    wrapper.style = `
        background-color: black;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: right;
        padding-right: 7px;
        width: 40px;
        height: 30px;
        right: 0px;`;
    
    wrapper.appendChild(Component);

    return wrapper;
};

const Loading_Icon = Loading_Icon_Constructor();
export default Loading_Icon