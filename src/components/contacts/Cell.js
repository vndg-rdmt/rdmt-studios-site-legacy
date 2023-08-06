import STYLES from "../Styles";

const styles = {
    Component: `
        z-index: 10;
        flex-direction: column;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        color: white;
        font-size: 12px;`,
};

export default function Cell(type, text, pos1) {
    
    const Component = document.createElement('div');
    Component.style = `${STYLES.wrap} ${styles.Component} ${pos1};`;
    Component.innerHTML = `${type} - ${text}`;
    
    return Component;
};