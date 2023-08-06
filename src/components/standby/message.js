import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Message() {
    const Component = document.createElement('div');
    Component.style = `
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 0px;
        margin-bottom: 40px;
    `;
    const text = (text) => {
        const cache = document.createElement('div');
        cache.className = "colorize";
        cache.style = "text-align: center; width: 326px; font-size: 13px; line-height: 16px; margin-top: 14px;";
        cache.textContent = text;

        return cache;
    };

    const text1 = text("At the moment, the mobile version of the site is under technical works. Use desktop version instead.");
    const text2 = text("Please accept our apologies for any inconveniences caused.");
    const text3 = text("Contacts are listed below");
    text3.style.marginTop = '28px';

    Component.append(text1, text2, text3);

    const mount = gsap.timeline({delay: '0.3'});
    mount.from(Component, {
        opacity: '0',
        duration: '1.2',
        ease: 'linear',
    });

    return Component
}