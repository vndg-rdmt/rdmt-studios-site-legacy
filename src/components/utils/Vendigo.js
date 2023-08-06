import gsap from "gsap";

export default function Vendigo() {
    const vendigo = document.createElement('img');
    vendigo.id = 'vendigo';
    vendigo.src = new URL('/public/props/vendigo.gif', import.meta.url);

    gsap.from(vendigo, {
        delay: '0.9',
        opacity: '0',
        duration: '3',
    });

    vendigo.addEventListener('loaded', ()=>{
        
        const unmount = gsap.timeline();
        unmount.to(vendigo, {
            delay: '1',
            opacity: '0',
            duration: '1.4',
        });
        unmount.eventCallback('onComplete', ()=>{
            vendigo.remove();
        })

    });

    return vendigo;
}