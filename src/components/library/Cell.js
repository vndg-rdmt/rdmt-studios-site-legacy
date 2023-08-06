import State from "../../state/state.js";
import gsap from "gsap";

const styles = {
    Component: `
        opacity: 0; 
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 14px;
        font-size: 12px;
        width: 100%;
        height: 30px;`,
};

export default function Cell(index, text) {
    
    const Index = document.createElement('div');
    Index.style.fontSize = `11px`;
    Index.style.paddingLeft = `7px`;

    const Text = document.createElement('div');

    if (text) {
        Text.textContent = `${text}`;
    } else { Text.textContent = `......` };

    if (index<10) {
        Index.textContent = `00${index}`;
    } else {
        Index.textContent = `0${index}`;
    };

    const Component = document.createElement('div');
    Component.style = styles.Component;
    Component.className = `white_text`;   // Component default state
    
    Component.setAttribute('data', `${index}`);

    Component.onclick = () => {
        State.OpenCell(Component);
    };

    Component.onmouseenter = () => { State.utils.ConnectAPI(Component, '_hover_') };

    Component.addEventListener('mount', () => {
        gsap.to(Component, {
            delay: '0.1',
            opacity: '1',
            duration: '0.4',
        })
    });
    
    Component.appendChild(Index);
    Component.appendChild(Text);

    return Component;
};