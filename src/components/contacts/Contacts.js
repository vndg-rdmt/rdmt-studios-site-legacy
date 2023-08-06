import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

import './style.css';

import BottomLabels from './bottomLabels';

export default function Contacts() {

    const Component = document.createElement('div');
    Component.style = `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100vw;
        margin-top: 50px;
        padding-bottom: 15vh;
    `;

    const mount = gsap.timeline({});

    const maintext = document.createElement('div');
    maintext.className = 'tms_reg';
    maintext.style = `
        color: white;
        font-size: 36px;
        text-align: center;`;
    maintext.textContent = 'RDMT STUDIOS 1986';

    mount.from(maintext, {
        delay: '0.3',
        opacity: '0',
        duration: '1.2',
        ease: 'linear',
    });

    const credits = document.createElement('div');
    credits.style = `
        margin-top: 30px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;`;
    
    const credits_d = document.createElement('img');
    credits_d.src = new URL('./assets/credits_default.svg', import.meta.url);
    credits_d.style = `width: 350px; opacity: 1;`;
    credits.appendChild(credits_d);

    const credits_f = document.createElement('img');
    credits_f.src = new URL('./assets/credits.svg', import.meta.url);
    credits_f.style = `position: absolute; width: 350px; opacity: 0;`;
    credits.appendChild(credits_f);

    const notemark = document.createElement('img');
    notemark.src = new URL('./assets/notemark.svg', import.meta.url);
    notemark.style = `
        scale: 1.7;
        position: absolute;
        right: -25px;
        bottom: -15px;`;
    credits.appendChild(notemark);

    mount.from(credits, {
        delay: '0.90',
        opacity: '0',
        duration: '1.2',
        ease: 'linear',
    });

    credits.onmouseenter = () => {
        gsap.to(credits_d, {
            opacity: '0',
            duration: '1',
            ease: 'power1.out',
        });
        gsap.to(credits_f, {
            opacity: '1',
            duration: '1',
            ease: 'power1.out',
        })
    };

    credits.onmouseleave = () => {
        gsap.to(credits_d, {
            opacity: '1',
            duration: '1',
            ease: 'power1.out',
        });
        gsap.to(credits_f, {
            opacity: '0',
            duration: '0.7',
            ease: 'linear',
        })
    };

    Component.append(maintext, credits, BottomLabels(),);

    return Component
}