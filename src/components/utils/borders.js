import gsap from "gsap";

const style = {

    Component: `
        pointer-events: none;
        z-index: 3000;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
        height: 100vh;`,

    Border: `
        width: 100vw;
        height: 10vh;
        background-color: black;`,
};

const Border = () => {
    
    const Component = document.createElement('div');
    Component.style = style.Border;

    return Component;
};

export default function Borders() {

    const Component = document.createElement('div');
    Component.id = 'borders';
    Component.style = style.Component;

    Component.appendChild(Border());
    Component.appendChild(Border());

    Component.addEventListener('loaded', () => {
        
        const unmount = gsap.timeline();
        unmount.to(Component, {
            delay: '1',
            height: '120vh',
            duration: '1.4',
            ease: 'linear',
        });
        unmount.eventCallback('onComplete', ()=>{
            Component.remove();
        });
    });

    gsap.from(Component, {
        delay: '1',
        height: '120vh',
        duration: '1.8',
        ease: 'power2.out',
    });

    return Component;
};