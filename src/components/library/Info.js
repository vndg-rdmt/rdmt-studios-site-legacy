import State from "../../state/state.js";
import gsap from "gsap";
import "./style.css";

const LIGHT = 'rgba(255,255,255,0.8)'
const styles = {

    Component: `
        position: relative;
        display: flex;
        flex-direction: column;
        width: 38vw;
        height: 55vh;
        padding: 20px;
        gap: 40px;
        border-top: 1px solid rgba(255,255,255,0.4);
        border-bottom: 1px solid rgba(255,255,255,0.4);`,
    _title: `
        color: white;
        font-size: 28px;`,
    _text: `
        color: white;
        line-height: 15px;
        width: 100%;
        max-width: 600px;
        position: absolute;
        top: 27%;
        font-size: 13px;`,
    _data: `
        color: ${LIGHT};
        font-size: 10px;
        position: absolute;
        bottom: 11px;`,
    desc: `
        color: rgba(255,255,255,0.4);
        position: absolute;
        top: 20%;
        left: 0px;
        font-size: 10px;
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        padding-bottom: 10px;
        padding-left: 20px;`,
};

export default function Info() {
    
    const _title = document.createElement('div');
    _title.style =  styles._title;

    const _text = document.createElement('div');
    _text.style = styles._text;

    const _data = document.createElement('div');
    _data.style = styles._data;

    const temp_desc = document.createElement('div');
    temp_desc.style = styles.desc;
    temp_desc.textContent = `DESCRIPTOR`;

    const Component = document.createElement('div');
    Component.style = styles.Component;
    Component.id = 'library_info';

    const mount = gsap.timeline({
        delay: '2.5',
    });
    mount.from(Component, {
        opacity: '0',
        duration: '1',
    });

    State.OpenInfo(_title, _text, _data, Component);

    Component.appendChild(_title);
    Component.appendChild(temp_desc);
    Component.appendChild(_text);
    Component.appendChild(_data);

    State.SubTo('Info', Component, 'change_cell', ()=>{
        State.OpenInfo(_title, _text, _data, Component);
    });

    return Component;
};