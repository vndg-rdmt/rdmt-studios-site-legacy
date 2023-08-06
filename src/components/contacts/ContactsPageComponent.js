import Links from "./links";
import Contacts from "./Contacts";

export default function ContactsPageComponent() {

    const Component = document.createElement('div');
    Component.style = `
        padding-top: 4vh;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    Component.append(Links(), Contacts());

    return Component
}