import gsap from "gsap";
import "./style.css";

const styles = {

    name: `
        font-size: 25px;
        height: 25px;
        color: white;`,
    spec: `
        font-size: 15px;
        height: 15px`,
    Component: `
        position: relative;
        padding: 5px;
        gap: 20px;
        color: white;
        width: 0%;
        height: 60%;
        border-top: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: hidden;`,
    header: `
        background-color: white;
        color: transparent;
        font-size: 13px;
        width: 100%;
        display: flex;
        padding: 11px;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
        justify-content: center;`,
    wrapper: `
        display: flex;
        justify-content: left;
        flex-direction: column;
        gap: 7px;
        padding-left: 15px;`,
    Body: `
        display: flex;
        justify-content: left;
        flex-direction: column;
        gap: 21px;`,
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
};


export default function MobileLinks() {

    
    // Name (ID) field
    // ========================
    const name = document.createElement('div');
    name.style = styles.name;
    
    const wrapper_name = document.createElement('div');
    wrapper_name.style = styles.wrapper;
    

    wrapper_name.appendChild(name);
    // ========================


    // Spec (description) field
    // ========================


    const wrapper_spec = document.createElement('div');
    wrapper_spec.style = styles.wrapper;


    // ========================

    function email(text, link, display) {
        
        const wrapper = document.createElement('div');
        wrapper.style = `
            padding: 0px 22px 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;

        if (text) {
            const _text = document.createElement('div');
            _text.style = 'font-size: 11px; margin: 10px;';
            _text.textContent = 'EMAIL';
            wrapper.appendChild(_text);
        };
        const cache = document.createElement('div');
        cache.style = `
            pointer-events: all;
            background-color: #171D21;
            font-size: 14px;
            width: 100%;
            height: auto;
            text-align: center;
            padding: 16px 0px;
            border: 2px solid #283F52;
            color: white;
            font-size: 12px;
        `;
        cache.innerHTML = `
            <div style="pointer-events: none; font-size: 14px" class="font_rm">${display}</div>
        `;
        cache.onclick = () => {
            const win = window.open(link, '_blank');
            win.focus();
        };

        wrapper.appendChild(cache);
        return wrapper;
    };

    // Body element
    // ========================
    const Body = document.createElement('div');
    Body.style = styles.Body;
    Body.appendChild(wrapper_name);
    Body.appendChild(wrapper_spec);
    // ========================

    const header = document.createElement('div');
    header.style = styles.header;
    header.innerHTML = `
        <div>RDMT STUDIOS</div>
    `;

    const Component = document.createElement('div'); // Component to render
    Component.style = styles.Component;
    Component.id = 'CARD_HOLDER';

    // Animation props
    // ====================
    const body = document.createElement('div');
    body.style = styles.body;

    const _border1 = document.createElement('div');
    _border1.style = styles._border1;

    const _border2 = document.createElement('div');
    _border2.style = styles._border2;

    const wrapper = document.createElement('div');
    wrapper.style = 'display: flex; justify-content: center; align-items: center; flex-direction: column; position: absolute; width: calc(100% - 10px); height: calc(100% - 10px); pointer-events: none;';
    // ====================

    const mount = gsap.timeline({
        delay: '1',
    });
    mount.to(Component, {
        borderColor: '#FFFFFF',
        width: '100%',
        duration: '0.9',
        ease: 'power2.out',
    });
    mount.to(Component, {
        delay: '0',
        duration: '0',
        border: '1px solid',
    })
    mount.from(Component, {
        padding: '0px',
        height: '0px',
        duration: '0.9',
        ease: 'steps(11)',
    });
    mount.to(body, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    });
    mount.to(body, {
        width: '100%',
        height: '100%',
        duration: '0.5',
        ease: 'steps(9)',
    });
    mount.to(_border1, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border1, {
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        duration: '0.5',
        ease: 'steps(9)',
    }, '<');
    mount.to(_border2, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border2, {
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        duration: '0.5',
        ease: 'steps(9)',
    }, '<');
    mount.from(header, {
        padding: '0px',
        height: '0px',
        ease: 'steps(2)',
        duration: '0.4',
    });
    mount.to(header, {
        duration: '0',
        color: 'black',
    });
    mount.to(header, {
        delay: '0.1',
        duration: '0',
        color: 'transparent',
    });
    mount.to(header, {
        delay: '0.1',
        duration: '0',
        color: 'black',
    });

    mount.eventCallback("onComplete", () => {
        body.removeChild(_border1);
        body.removeChild(_border2);
        wrapper.style.justifyContent = 'flex-start';
        wrapper.append(link1, tempWrapper);
        gsap.from(link2, {
        delay: '0.2',
        opacity: '0',
        duration: '0.4'
    });
    gsap.from(link3, {
        delay: '0.4',
        opacity: '0',
        duration: '0.4'
    });
    gsap.from(link1, {
        delay: '0.6',
        opacity: '0',
        duration: '0.4'
    });

    });

    const link1 = email('EMAIL', 'mailto:rdmtstudios@yandex.ru', 'RDMTSTUDIOS@YANDEX.RU');
    link1.style.position = 'absolute';
    link1.style.bottom = '12px';

    const link2 = email('', 'https://www.behance.net/rdmtstudios', 'BEHANCE');
    const link3 = email('', 'https://github.com/RDMTSTUDIOS', 'GITHUB');

    const tempWrapper = document.createElement('div');
    tempWrapper.style = `width: 100%; padding-top: 60px;`;
    
    tempWrapper.append(link2, link3);

    
    body.appendChild(_border1);
    body.appendChild(_border2);
    wrapper.appendChild(body);
    Component.appendChild(wrapper);
    Component.appendChild(header);
    Component.appendChild(Body);


    return Component;
};