import gsap from "gsap";

const styles = {
    Logotype: `
        position: absolute;
        width: 40vw;
        opacity: 0;
        min-width: 500px;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;`,
}

export default function ConduitIcon() {

    const Logotype = document.createElement('img');
    Logotype.src = new URL('/public/props/Conduit.svg', import.meta.url);
    Logotype.style = styles.Logotype;

    const MountAnimation = gsap.timeline();
    MountAnimation.to(Logotype, {
        duration: '0.7',
        opacity: '1'
        
    })

    return Logotype;
}