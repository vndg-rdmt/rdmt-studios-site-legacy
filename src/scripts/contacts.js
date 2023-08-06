import Essentials from "../components/utils/Essentials";
import Title from "../components/utils/Title";
import BackButton from "../components/utils/BackButton";
import Contacts from "../components/contacts/Contacts";
import Cursor from "../components/utils/cursor";
import { Load } from "../components/utils/Redirection.js";
import Links from "../components/contacts/links";

import ContactsPageComponent from "../components/contacts/ContactsPageComponent";

import forMobileDevices from "./forMobileDevices.js";

document.addEventListener('DOMContentLoaded', Init);

const root = document.getElementById('root');
forMobileDevices();
Essentials();
Load(root);

function Init() {

    setTimeout(()=>{
        document.getElementById('vendigo').dispatchEvent(new Event('loaded'));
        document.getElementById('borders').dispatchEvent(new Event('loaded'));
    }, 4000);

    setTimeout(()=>{
        root.appendChild(Title('CONTACTS'));
        root.appendChild(BackButton(root));
        root.appendChild(ContactsPageComponent());
        Cursor(root, 1.5)
    }, 6500);

};