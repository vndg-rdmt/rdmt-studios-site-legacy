import gsap from "gsap";

export default function Essentials() {

    const grid = document.createElement('div');
    grid.className = 'grid';

    const bg = document.createElement('div');
    bg.className = 'bg';

    const mount = gsap.timeline();

    mount.from(grid, {
        delay: '0.8',
        opacity: '0',
        duration: '1.5',
    });
    mount.from(bg, {
        delay: '0.3',
        opacity: '0',
        duration: '1.5',
    }, '<');

    document.body.prepend(grid);
    document.body.prepend(bg);
} 