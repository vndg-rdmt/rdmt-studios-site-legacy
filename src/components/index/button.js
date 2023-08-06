import gsap from "gsap";

const styles = {
    
    Component: `
        opacity: 0;
        padding: 2px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;`,
    content: `
        opacity: 0;
        padding: 9px;
        width: 100px;
        text-align: center;
        font-size: 11px;
        color: white;`,
}

export default function Button(title, index) {

    const Component = document.createElement('div');
    Component.className = 'conduit_pipeline colorize scale';
    Component.style = styles.Component;
    Component.style.pointerEvents = 'none';

    const content = document.createElement('div');
    content.style = styles.content;
    content.textContent = `${title}`;
    
    Component.appendChild(content);

    {
        const border = document.createElement('div');
        border.style = 'position: absolute; top: 0px; width: 0px; height: 0px; border-top: 1px solid white;';
        Component.appendChild(border);

        const border2 = document.createElement('div');
        border2.style = `position: absolute; width: 100%; height: 0%; background-color: white;`;

        border.appendChild(border2)

        const mount = gsap.timeline({delay: 0.7*index});
        mount.to(Component, {
            opacity: '1',
            duration: '0',
        });
        mount.to(border, {
            delay: `${0.15*index + (4*0.7 - 0.7*index)}`,
            width: '100%',
            duration: '0.6',
            ease: 'power2.out',
        });
        mount.to(border, {
            delay: '0.5',
            border: '1px solid white',
            duration: '0.01',
        })
        mount.to(border, {
            height: '100%',
            duration: '0.2',
            ease: 'steps(3)',
        });
        mount.to(border2, {
            height: '100%',
            duration: '0.2',
            ease: 'steps(3)',
        });
        mount.eventCallback('onComplete', () => {

            Component.style.pointerEvents = 'all';
            
            content.style.opacity = '1';
            border2.style.bottom = '0px';
            gsap.to(border2, {
                height: '0px',
                duration: '0.2',
                ease: 'steps(3)',
            });
            gsap.to(border, {
                delay: '0.1',
                opacity: '0',
                duration: '0.2',
            })
        });
        
    }
    
    return Component
}