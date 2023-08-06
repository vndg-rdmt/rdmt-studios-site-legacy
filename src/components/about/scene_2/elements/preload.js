import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Preload() {

    const component = document.createElement('div');
    component.style = `
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;`;

    const mount_animation = gsap.timeline();
    mount_animation.to(component, {
        delay: '3',
        opacity: '1',
        duration: '0',
    });

    {
        const temp = document.createElement('div');
        temp.textContent = 'REDEMPT INTERFACE';
        temp.className = 'font_rm';
        temp.style = `
            color: white;
            font-size: 18px;
            position: absolute;`;
        mount_animation.to(temp, {
            text: {
                value: 'VENDIGO',
            },
            duration: '0',
            delay: '3',
        });
        component.appendChild(temp);
    };

    {
        const temp_1 = document.createElement('div');
        temp_1.style = `
            display: flex;
            flex-direction: row;
            gap: 10px;
            position: absolute;
            bottom: 16vh;`;
        {
            const temp = document.createElement('div');
            temp.className = 'font_rm';
            temp.textContent = `RDMT/ARCHIVE CASSETTE [1.03]`
            temp.style = `
                color: white;
                font-size: 11px`;
            temp_1.appendChild(temp);
        };

        {
            const temp = document.createElement('div');
            temp.className = 'font_rm';
            temp.textContent = `VRDX SOLUTION   RES 2.39`;
            temp.style = `
                color: white;
                font-size: 11px;`;
            temp_1.appendChild(temp);
        };
        component.appendChild(temp_1);  
    };

    mount_animation.to(component, {
        delay: '3',
        opacity: '0',
        duration: '0',
    });
    mount_animation.eventCallback('onComplete', ()=>{
        component.remove();
    });

    const sound = new Audio;
    sound.src = new URL('./vhs_click.mp3', import.meta.url);
    setTimeout(()=>{sound.play()}, 3000);
    setTimeout(()=>{sound.play()}, 9000);
    setTimeout(()=>{sound.play()}, 12000);

    return component;
}