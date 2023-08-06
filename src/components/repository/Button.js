import State from "../../state/state";
import gsap from "gsap";

const styles = {
    Component: `
        opacity: 0;
        width: 1fr;
        height: 100%;
        padding: 7px;
        border: 1px solid white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;`,
};

export default function Button(cell, num) {
    
    const name = document.createElement('div');     // id field
    name.style.pointerEvents = 'none';
    if(cell) {name.textContent = `${cell._id}`}
    else {name.textContent = `???`};

    const index = document.createElement('div');    // spec field
    index.textContent = `${num + 1}`;
    index.style.pointerEvents = 'none';

    const Component = document.createElement('div');    // Returned component
    Component.style = styles.Component;
    Component.className = 'button';
    Component.setAttribute('data', `${num}`)

    Component.addEventListener('mount', () => {
        gsap.to(Component, {
            delay: '3',
            opacity: '1',
            duration: '0.4',
        })
    });

    Component.onmouseenter = () => {
        State.utils.ConnectAPI(Component, '_hover_');
    };

    Component.onclick = () => {
        State.repository.Fill(Component);
    };

    Component.appendChild(name);
    Component.appendChild(index);

    return Component;
};