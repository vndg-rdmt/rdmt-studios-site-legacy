import Message from "../components/standby/message.js";
import Essentials from "../components/utils/Essentials.js";
import MobileLinks from "../components/standby/mobileLinks.js";


function redirect() {
    if (window.innerWidth > 900) {
        sessionStorage.removeItem('smallRes');
        history.back();
    };
};

redirect();

if (sessionStorage.getItem('smallRes') == 'true') {
    window.addEventListener('resize', redirect);
} else {
    window.location.assign('/');
};

const root = document.getElementById('root');
Essentials();

{
    const cache = document.querySelector('.bg');
    cache.remove();
}

const Component = document.createElement('div');
Component.style = `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px 20px 20px 20px;
    align-items: center;
`;

Component.append(Message(), MobileLinks());
root.append(Component);