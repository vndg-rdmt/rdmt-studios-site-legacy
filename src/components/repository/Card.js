import State from "../../state/state";
import Configuration from "../../state/configuration";

import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

const styles = {

    name: `
        font-size: 25px;
        height: 25px;
        color: white;`,
    spec: `
        font-size: 15px;
        height: 15px`,
    Component: `
        padding: 5px;
        gap: 20px;
        color: white;
        width: 600px;
        height: 268px;
        border: 1px solid white;
        position: absolute;
        top: 10vh;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow: hidden;`,
    header: `
        background-color: white;
        color: transparent;
        font-size: 12px;
        width: 100%;
        display: flex;
        padding: 11px;
        padding-left: 15px;
        padding-right: 15px;
        align-items: center;
        justify-content: space-between;`,
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

export default function Card() {

    if(State.repository.Card) { console.log(`Card already exists`); return State.repository.Card };
    const init_data = Configuration.repository[State.repository.Current_Cell.getAttribute('data')];
    
    // Name (ID) field
    // ========================
    const name = document.createElement('div');
    name.style = styles.name;
    name.textContent = init_data._id;
    
    const wrapper_name = document.createElement('div');
    wrapper_name.style = styles.wrapper;
    
    const _id = document.createElement('div');
    _id.style = "color: rgba(255,255,255,0.6); font-size: 12px; height: 12px;";
    _id.textContent = 'ID';

    wrapper_name.appendChild(_id);
    wrapper_name.appendChild(name);
    // ========================


    // Spec (description) field
    // ========================
    const spec = document.createElement('div'); 
    spec.style = styles.spec;
    spec.textContent = init_data._spec;

    const wrapper_spec = document.createElement('div');
    wrapper_spec.style = styles.wrapper;

    const _spec = document.createElement('div');
    _spec.style = "color: rgba(255,255,255,0.6); font-size: 12px; height: 12px";
    _spec.textContent = 'SPECIFICATION';

    wrapper_spec.appendChild(_spec);
    wrapper_spec.appendChild(spec);
    // ========================


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
        <div style="font-size: 14px;">PERSONA LOG</div>
        <div style="font-size: 14px;">REPOSITORY</div>`

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
    wrapper.style = 'display: flex; justify-content: center; align-items: center; position: absolute; width: calc(100% - 10px); height: calc(100% - 10px);'    
    // ====================

    Component.addEventListener('render_info', (event)=>{  // Fired, when user changes active cell. Renders new info
        
        // == Render new text content to `name` and `spec` ==
        const Fill = gsap.timeline();

            name.textContent = '.';
            spec.textContent = '.';

            function KillProc() {
                Component.removeEventListener('render_info',KillProc);
                Fill.kill();
            ;}

            Component.addEventListener('render_info', KillProc);
        
            Fill.to(name, {
                text: {
                value: event.detail.id,
                },
                duration: '0.3',
                ease: 'none',
            });
            Fill.to(spec, {
                text: {
                    value: event.detail.spec,
                },
                duration: '0.83',
                ease: 'power1.out',
            }, '<');

            Fill.eventCallback('onComplete', () => {
                Component.removeEventListener('render_info', KillProc);
            });
        // ====================

    });

    const mount = gsap.timeline({
        delay: '0.5',
    });
    mount.from(Component, {
        borderColor: 'transparent',
        width: '0px',
        duration: '0.9',
        ease: 'power2.out',
    });
    mount.from(Component, {
        padding: '0px',
        height: '0px',
        duration: '0.5',
        ease: 'steps(9)',
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
    mount.from(_id, {
        delay: '0.1',
        text: {
            value: '',
        },
        duration: '0.25',
    },);
    mount.from(name, {
        text: {
            value: '',
        },
        duration: '0.6',
    },'<');
    mount.from(_spec, {
        text: {
            value: '',
        },
        duration: '0.3',
    },'<');
    mount.from(spec, {
        text: {
            value: '',
        },
        duration: '0.7',
    },'<');

    mount.eventCallback("onComplete", () => {
        body.removeChild(_border1);
        body.removeChild(_border2)
    });

    State.repository.Card = Component;
    
    body.appendChild(_border1);
    body.appendChild(_border2);
    wrapper.appendChild(body);
    Component.appendChild(wrapper);
    Component.appendChild(header);
    Component.appendChild(Body);

    return Component;
};