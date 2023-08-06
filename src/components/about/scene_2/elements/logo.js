import gsap from "gsap";
import jacket from "./ARCHIVE-JACKET.png";

export default function Logo() {
    
    const component = document.createElement('div');
    component.style = `
        padding-top: 30px;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;`;
    component.id = 'LOGO';
    
    const main_text = document.createElement('div');
    main_text.style = `font-size: 14px; color: white;`;
    main_text.className = 'font_rb';
    main_text.textContent = `RDMT STUDIOS 1986`;

    const bottom_text = document.createElement('div');
    bottom_text.style = `font-size: 10px; color: white`;
    bottom_text.className = 'font_rm';
    bottom_text.textContent = 'ALL RIGHTS RESERVED';

    const text_wrapper = document.createElement('div');
    text_wrapper.style = `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`;

    text_wrapper.append(main_text, bottom_text);

    const image = document.createElement('img');
    image.style.width = '60px';
    image.src = jacket;

    component.append(image, text_wrapper);

    const mount_animation = gsap.timeline();
    mount_animation.to(component, {
        opacity: '1',
        delay: '2',
        duration: '0',
    })

    return component;
}