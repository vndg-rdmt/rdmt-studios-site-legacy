import State from "../../state/state";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


function Loader() {
    const Component = document.createElement('div');
    Component.style = `
        position: absolute;
        top: 48%;
        border: 1px solid white;
        height: 32px;
        padding: 5px;
        width: 30vw;
        min-width: 600px;
    `;

    const loader = document.createElement('div');
    loader.style = `
        background-color: white;
        height: 100%;
        width: 100%;
    `;

    const mount = gsap.timeline({delay: '0.3'});
    mount.from(Component, {
        opacity: '0',
        duration: '0.4',
        ease: 'linear',
    });
    mount.from(loader, {
        delay: '0.2',
        width: '0px',
        ease: 'steps(8)',
        duration: '2.3',
    });
    mount.to(Component, {
        delay: '0',
        ease: 'steps(6)',
        height: '12px',
        duration: '0.5',
        border: 'none',
    });
    mount.to(Component, {
        width: '0px',
        minWidth: '0px',
        duration: '0.2',
        ease: 'steps(6)'
    });
    mount.to(Component, {
        opacity: '0',
        duration: '0',
    });

    Component.appendChild(loader)

    return Component
}


function MyLinks() {

    let i = 1;

    const Component = document.createElement('div');
    Component.id = 'links_list';
    Component.style = `
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 75vw;
        max-width: 1200px;
        min-width: 810px;
        gap: 30px;
    `;

    const Button = (_Title, _Content, _Link) => {
        
        const Button = document.createElement('div');
        Button.className = 'colorize';
        Button.style = `
            width: 100%;
            height: 100%;
            border-top: 1px solid white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        `;


        const _title = document.createElement('div');
        _title.style = `
            margin-top: 24px;
            color: white;
            font-size: 11px;
        `;
        _title.textContent = `0${i}. ${_Title}`;


        const _body = document.createElement('div');
        _body.style = `
            margin-top: 6px;
            color: white;
            font-size: 11px;
        `;
        _body.textContent = `${_Content}`;


        const _link = document.createElement('div');
        _link.className = `conduit_pipeline`;
        _link.style = `
            font-size: 11px;
            margin-top: 50px;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 16px 0px;
            color: white;
        `;
        _link.onmouseover = () => { State.utils.ConnectAPI(Component, '_hover_') };

        if (_Link) {
            _link.textContent = 'NAVIGATE TO';
            _link.onclick = () => {
                const win = window.open(_Link, '_blank');
                win.focus();
            };
        } else {
            _link.textContent = 'MAIL';
            _link.onclick = () => {
                const mailLink = 'mailto:rdmtstudios@yandex.ru';
                const win = window.open(mailLink, '_blank');
                win.focus();
            };
        };

        Button.append(_title, _body, _link);

        const mount = gsap.timeline({delay: '3.3'});
        mount.from(Button, {
            opacity: '0',
            duration: '0.01',
            ease: 'power1.out',
            delay: `${i*0.5}`,
        });

        i++;

        return Button;
    };

    Component.append(
        (Button('behance', 'BEHANCE.NET/RDMTSTUDIOS', 'https://www.behance.net/rdmtstudios')),
        (Button('email', 'rdmtstudios@yandex.ru')),
        (Button('github', 'GITHUB.COM/RDMTSTUDIOS', 'https://github.com/RDMTSTUDIOS')),
    );
  
    return Component;
};

export default function Links() {

    const Component = document.createElement('div');
    Component.id = 'contacts_links';
    Component.style = `
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    `;

    Component.append(Loader(), MyLinks());

    return Component;
}