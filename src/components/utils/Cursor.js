import gsap from "gsap";
import State from "../../state/state.js";

const styles = {
    
    pointer: `
        z-index: 1000;
        position: absolute;
        border-radius: 10%;
        border: 1px solid white;
        width: 27px;
        height: 12px;
        will-change: transform;
        transition: 0.23s ease-out;
        pointer-events: none;
        opacity: 0;
        top: 0;
        left: 0;`,
    
    pointer_api: `
        z-index: 1000;
        position: absolute;
        will-change: transform:
        transition: 0.28s ease-out;
        pointer-events: none;
        opacity: 0;
        color: white;
        font-size: 10px;
        top: 0;
        left: 0;`,
};

export default function Cursor(root, delay = 0) {

    if (State.utils.cursor) { return State.utils.cursor };

    // === Elements Init ===
    const pointer = document.createElement('div');
    pointer.style = styles.pointer;

    const pointer_cr = document.createElement('div');
    pointer_cr.style = styles.pointer_api;

    const pointer_api = document.createElement('div');
    pointer_api.style = styles.pointer_api;

    let x = window.innerWidth/2, y = window.innerHeight/2;

    // === . . . ===

    // === Interface ===
    // 1. Base Interface:
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; }); // Destination
    
    function updateCursorPosition() {
        
        // Path:
        pointer.style.transform = `translate(${x}px, ${y}px)`;
        pointer_cr.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
        pointer_api.style.transform = `translate(${x + 20}px, ${y + 32}px)`;
        pointer_cr.textContent = `${x} : ${y}`;

        requestAnimationFrame(updateCursorPosition);
    };

    // 2. Mount animation:
    const injection_animation = gsap.timeline({
        delay: `${delay}`,
        paused: true,
    });
    injection_animation.to(pointer, {
        opacity: '1',
        ease: 'power1.out',
        duration: '1.2',
    });
    injection_animation.to(pointer_cr, {
        opacity: '1',
        ease: 'power1.out',
        duration: '1.2',
    }, '<');
    injection_animation.to(pointer_api, {
        opacity: '1',
        ease: 'power1.out',
        duration: '1.2',
    }, '<');

    // 3. Document interaction (Pointer API):
    let target = null; // Focused element to interact

    function Hover(e) {

        target = e.detail.target;
        target.addEventListener('mouseleave', Leave);
        gsap.to(pointer_api, {
            text: {
                value: '> CLICK',
            },
            duration: '0.8',
            ease: 'power3.out',
        });
    };

    function Leave() {

        target.removeEventListener('mouseleave', Leave);
        target = null;
        gsap.to(pointer_api, {
            text: {
                value: '',
            },
            duration: '0.8',
            ease: 'power3.out',
        })
    };

    pointer_api.addEventListener('_hover_', Hover);
    // === . . . ===

    // === INIT ===
    // 1. Interface init:
        updateCursorPosition();

    // 2. Adding API to application:
        State.utils.pointer_api = pointer_api;

    // 3. Mount stage:
        root.appendChild(pointer);
        root.appendChild(pointer_cr);
        root.appendChild(pointer_api);
        injection_animation.play();
    // === ... ===
};