import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const styles = {

    Component: `
        z-index: 10000;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        top: 13vh`,

    body: `
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`,

    _border1: `
        position: absolute;`,
    
    _border2: `
        position: absolute;`,
    text: `
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 100%;
        position: absolute;
        top: 0px;`,
    value: `
        opacity: 0;
        color: black;
        font-size: 16px;
        text-align: center;
        line-height: 1.4`,

};

export default function Title(page) {

    const body = document.createElement('div');
    body.style = styles.body;

    const _border1 = document.createElement('div');
    _border1.style = styles._border1;

    const _border2 = document.createElement('div');
    _border2.style = styles._border2;

    const text = document.createElement('div');
    text.style = styles.text;

    const value = document.createElement('div');
    value.style = styles.value;

    text.appendChild(value)
    body.appendChild(text);
    body.appendChild(_border1);
    body.appendChild(_border2);

    const Component = document.createElement('div');
    Component.style = styles.Component;

    Component.appendChild(body);
    Component.id = '__Title';

    const mount = gsap.timeline({
        delay: 1,

    });
    mount.to(body, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    });
    mount.to(body, {
        width: '250px',
        height: '70px',
        duration: '0.3',
        ease: 'steps(6)',
    });
    mount.to(_border1, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border1, {
        width: '250px',
        height: '70px',
        duration: '0.3',
        ease: 'steps(6)',
    }, '<');
    mount.to(_border2, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border2, {
        width: '250px',
        height: '70px',
        duration: '0.3',
        ease: 'steps(6)',
    }, '<');
    mount.to(text, {
        height: '100%',
        duration: '0.3',
        ease: 'steps(3)'
    });
    mount.to(value, {
        opacity: '1',
        duration: '0',
        text: {
            value: `CURRENT PATH<br>${page}`,
        },
    });
    mount.to(value, {
        delay: '0.1',
        duration: '0',
        opacity: '0',
    });
    mount.to(value, {
        delay: '0.1',
        duration: '0',
        opacity: '1',
    });

    mount.to(_border1, {
        border: 'none',
        duration: '0',
    });
    mount.to(_border2, {
        border: 'none',
        duration: '0',
    })
    mount.to(value, {
        color: 'transparent',
        delay: '0.8',
        duration: '0',
    });
    mount.to(body, {
        delay: '0',
        duration: '0.4',
        ease: 'steps(3)',
        height: '0px',
        transformOrigin: 'top',
    });
    mount.to(body, {
        width: '0px',
        duration: '0.12',
        ease: 'steps(3)',
    });
    mount.to(Component, {
        delay: '0',
        duration: '0',
        opacity: '0',
    });
    mount.eventCallback('onComplete', ()=>{
        Component.remove();
    });

    return Component
};