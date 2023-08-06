import Cell from "./Cell.js";
import State from "../../state/state.js";
import Configuration from "../../state/configuration.js";
import gsap from "gsap";
import Loading_Icon from "../utils/Current_Icon.js";

const styles = {
    Component: `
        display: flex;
        flex-direction: column;
        width: 38vw;
        height: 55vh;
        gap: 3px;
        border-top: 1px solid rgba(255,255,255,0.4);
        border-bottom: 1px solid rgba(255,255,255,0.4);
        padding: 8px;`,
};

export default function Listing() {

    const mount_cell = new CustomEvent('mount');
    let child_nodes = [];
    
    // Init component
    const Component = document.createElement('div');
    Component.style = styles.Component;
    Component.id = 'library_listing';

    const mount = gsap.timeline({
        delay: '2.5',
    });
    mount.from(Component, {
        opacity: '0',
        duration: '1',
    });

    // Check where to grab data to render

    async function renderContent() {

        Component.innerHTML = '';

        Configuration.library[State.library.Grab_Data].forEach((element, index) => {
            
            const temp = Cell(index, element._title);
            Component.appendChild(temp);
            child_nodes.push(temp);
        });

        State.library.List = Component.firstChild;  // Component opened
        State.library.List.appendChild(Loading_Icon);
        State.library.Opened_List = Component.firstChild.getAttribute('data');
        Component.firstChild.className = 'active';  // Component active state

    };

    function apperCells() {
        
        child_nodes.forEach((current, index) => { setTimeout(() => { current.dispatchEvent(mount_cell) }, index*70); });
        child_nodes = [];
    };

    renderContent().then(()=>{ setTimeout(apperCells, 2400) })

    State.SubTo('Listing', Component, 'change_header', () => { renderContent(); apperCells(); });

    return Component;
};