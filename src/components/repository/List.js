import Configuration from "../../state/configuration";
import Button from "./Button";
import State from "../../state/state.js";

const styles = {
    Component: `

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 21px;
    grid-row-gap: 6px;

    position: absolute;
    width: 80vw;
    height: 315px;
    padding: 10px;
    z-index: 100;

    bottom: 12vh;`,
};

export default function List() {

    const child_nodes = [];
    const mount_cell = new CustomEvent('mount');

    const Component = document.createElement('div');
    Component.style = styles.Component;

    let min_cells = 30;

    Configuration.repository.forEach((cell, index) => {
        if (cell) {
            const temp = Button(cell, index);
            Component.appendChild(temp);
            child_nodes.push(temp);
            min_cells--;
        };
    });

    if (min_cells) {
        for(min_cells; min_cells; min_cells--) {
            const temp = Button(null, 30-min_cells);
            Component.appendChild(temp);
            child_nodes.push(temp);
        };
    };

    child_nodes.forEach((current, index) => {
        setTimeout(() => {
            current.dispatchEvent(mount_cell);
        }, index*60);
    });

    State.repository.Current_Cell = Component.firstChild;
    State.repository.Current_Cell.className = 'active'

    return Component
};