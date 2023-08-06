import gsap from "gsap";

import Logo from "./logo";

const WIDTH = '701px';

const CONTENT = [
    
    `RDMT STUDIOS 1986<br><br>UI/UX . BRANDING . DESIGN . GRAPHIC DESIGN . TYPOGRAPHY .<br>PRODUCT DESIGN . RESEARCH . ILLUSTRATION . FRONTEND . `,

    `An unusual look at simple things, a minimalistic look, an amazing user experience.<br>Full path from an idea to a finished product.`,

    `Support throughout the development stage. Years of experience<br>in typography and design. Every detail will tell its own story.<br>Make your idea unique and inimitable,<br><br>regardless of the task.`,

]

function Cell(content, topMargin) {

    const component = document.createElement('div');
    component.className = `font_rm eBorder`;
    component.style = `
        width: ${WIDTH};
        border: 2px solid white;
        color: white;
        font-size: 13px;
        padding: 20px;`;
    component.innerHTML = content.toUpperCase();
    topMargin === 0 ? component.style.marginTop = `${topMargin-2}px` : component.style.marginTop = `${topMargin}vh`;

    return component;
};

export default function Table() {

    const component = document.createElement('div');
    component.style = `
        opacity: 0;
        position: absolute;
        top: 20vh;
        display: flex;
        flex-direction: column;
        width: ${WIDTH}`;
    CONTENT.forEach((current, index)=>{
        component.appendChild(Cell(current, index == 2 ? 7 : 0));
    });
    component.appendChild(Logo());

    const mount_animation = gsap.timeline();
    mount_animation.to(component, {
        delay: '3',
        opacity: '1',
        duration: '0',
    })

    return component;
};