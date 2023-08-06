// Exteranl
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// Modules
import Borders from "../../utils/borders";
import Cursor from "../../utils/Cursor";
import State from "../../../state/state";

// Assets
import './style.css';

const text = `Simple but expressive. Modern and approachable with an air of functionality.<br>Giving a minimalistic approach by removing the unnecessary`

const styles = {
    
    Component: `
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;`,

    main_text: `
        color: black;
        font-size: 26px;`,
    
    note_text: `
        position: absolute;
        bottom: 15vh;
        color: black;
        font-size: 12px;
        text-align: center;`,
};

export default function Scene1(root, sceneEnd) {

    const scene = document.createElement('div');
    scene.style = styles.Component;

    const main_text = document.createElement('div');
    main_text.classList = 'font_rm';
    main_text.style = styles.main_text;
    main_text.textContent = 'RDMT STUDIOS';

    const loading_text = document.createElement('div');
    loading_text.className = 'font_rm';
    loading_text.style = styles.note_text;
    loading_text.textContent = 'RECORDING';

    const text1 = document.createElement('div');
    text1.classList = `font_rm about_text_normal abs_pos`;
    text1.style = `padding: 20px; text-align: center;`
    text1.innerHTML = text.toUpperCase();

    const outro_button = document.createElement('div');
    outro_button.classList = 'about_text_normal abs_pos outro_button trans';
    outro_button.style.bottom = '25vh';
    outro_button.style.opacity = '0';
    outro_button.innerHTML = `<div>PLAY<div>`;

    function Play() {
        
        outro_button.removeEventListener('click', Play);
        outro_button.classList.toggle('trans');
        const sound = new Audio;
        sound.src = new URL('./elements/insert.mp3', import.meta.url)
        sound.play();

        const animation = gsap.timeline({delay: '0.2'});
        animation.to(text1, {
            opacity: '0',
            duration: '0.8',
            ease: 'linear'
        });
        animation.to(outro_button, {
            duration: '0.6',
            ease: 'power1.out',
            text: {
                value: 'ON AIR',
            },
        }, "<");
        animation.to(outro_button, {
            delay: '0.5',
            duration: '0.3',
            text: {
                value: '',
            },
        })
        animation.to(outro_button, {
            delay: '0.1',
            duration: '0.6',
            height: '0px',
            ease: 'steps(3)',
        },)
        animation.eventCallback('onComplete', ()=>{outro_button.remove(), loading_text.remove()});
        
        setTimeout(() => {
            main_text.remove();
            main_text.remove();
            text1.remove();
            if(sceneEnd) {sceneEnd()};
        }, 1500);
        
    }

    outro_button.addEventListener('click', Play)

    const button_animation = gsap.timeline({paused: true});
    button_animation.to(outro_button, {
        opacity: '1',
        duration: '0.6',
        ease: 'linear',
    })

    const animation = gsap.timeline({
        delay: '0.5',
    });
    animation.to(scene, {
        duration: '1.6',
        ease: 'power1.out',
        backgroundColor: '#7B1511',
    });
    animation.from(main_text, {
        opacity: '0',
        scale: '1.15',
        duration: '1.7',
        ease: 'power1.out',
    }, '<+1.2');
    animation.from(loading_text, {
        opacity: '0',
        ease: 'linear',
        duration: '1',
    })
    animation.to(main_text, {
        delay: '1.5',
        opacity: '0',
        duration: '1.2',
        ease: 'linear',
    });
    animation.from(text1, {
        delay: '0.8',
        opacity: '0',
        duration: '1.4',
        ease: 'linear',
    });
    animation.eventCallback('onComplete', () => {
        scene.appendChild(outro_button);
        button_animation.play();
        Cursor(root, 1);
    });

    outro_button.onmouseenter = () => { State.utils.ConnectAPI(outro_button, '_hover_') };

    scene.append(main_text, Borders(), loading_text, text1)
    root.appendChild(scene);
}