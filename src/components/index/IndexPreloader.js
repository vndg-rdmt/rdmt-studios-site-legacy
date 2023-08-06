import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function IndexPreloader(root, next, cursor) {

    const Component = document.createElement('div');
    Component.style = `
        position: absolute;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

        // Bottom Text -->
        const BottomText = document.createElement('div');
        BottomText.classList = 'colorize regular';
        BottomText.style = `position: absolute; bottom: 15vh; font-size: 11px;`;
        BottomText.textContent = `REDEMPT INTERFACE ACTIVE`;
        // <--


        // Loading Icon -->
        const LoadingIcon = document.createElement('div');
        LoadingIcon.classList = 'colorize regular';
        LoadingIcon.style = `
            position: absolute;
            width: 11px;
            height: 16px;
            text-align: center;
            bottom: calc(15vh + 40px);
            font-size: 11px;
        `;
        LoadingIcon.textContent = `╲`;

        const delay = 0.6;
        const LoadingIconAnimation = gsap.timeline({
            repeat: -1,
            repeatDelay: delay,
        });

        LoadingIconAnimation.to(LoadingIcon, {
            delay: delay,
            duration: 0,
            text: '┃',
            ease: 'none',
        });

        LoadingIconAnimation.to(LoadingIcon, {
            delay: delay,
            duration: 0,
            text: '╱',
           ease: 'none',
        });

        LoadingIconAnimation.to(LoadingIcon, {
            delay: delay,
            duration: 0,
            text: '━',
            ease: 'none',
        });
        // <--


        // InjectButton -->
        const InjectButton = document.createElement('div');
        InjectButton.classList = 'injectButton';
        InjectButton.style.opacity = '0';
        InjectButton.textContent = 'PRESS TO INJECT';

        InjectButton.onclick = () => {

            InjectButton.remove();
            LoadingIcon.remove();
            BottomText.remove();
            Component.appendChild(Title('RDMT STUDIOS 1986'));
            
            const Inject = gsap.timeline();
            Inject.to(LoadingText, {
                text: { value: 'SUCCESSFUL INJECTION' },
                duration: '0.9',
            });
            Inject.to(LoadingText, {
                opacity: '0',
                delay: '2.4',
                duration: '0.3',
            });
            Inject.eventCallback('onComplete', ()=>{
                LoadingText.remove();
                next();
                window.sessionStorage.setItem('alreadyVisited', 'true');
            });
            
        };

        const InjectButtonMountAnimation = gsap.timeline({ paused: true, });

        InjectButtonMountAnimation.to(InjectButton, {
            opacity: '1',
            delay: '0.6',
            duration: '1.2',
        });
        // <--


        // LoadingText -->
        const LoadingText = document.createElement('div');
        LoadingText.classList = 'colorize regular';
        LoadingText.style = `
            position: absolute;
            width: 190px;
            height: 150px;
            top: 35vh;
            line-height: 13px;`;

        const LoadingTextAnimation = gsap.timeline({ delay: '2.5', paused: true, });

        LoadingTextAnimation.to(LoadingText, {
            duration: 2,
            delay: 1,
            text: {
                value: 'AUTROPHY SHELL V2.07<br>SUBJECT STATUS :   UNKNOWN',
                preserveSpaces: true,
            }
        });

        LoadingTextAnimation.to(LoadingText, {
            duration: 2,
            delay: 2,
            text: {
                value: `AUTROPHY SHELL V2.07<br>SUBJECT STATUS :   UNKNOWN<br><br>SIGNATURE SHAPE :<br>CLOUDBREAKER 5510821<br>TRACEROUTE: SACRUM`,
                preserveSpaces: true,
            }
        });

        LoadingTextAnimation.to(LoadingText, {
            delay: 1.5,
            duration: 0,
            text: {
                value: ``,
            },
            width: 'fit-content',
            height: 'fit-content',
            textAlign: 'center',
        });
        LoadingTextAnimation.to(LoadingText, {
            duration: 1,
            text: {
                value: `ACCESS GAINED`,
                preserveSpaces: true,
            }, 
        });
        LoadingTextAnimation.eventCallback('onComplete', () => {

            Component.appendChild(InjectButton);
            cursor();
            InjectButtonMountAnimation.play();
        });
        // <--

        const MountAnimation = gsap.timeline({
            paused: true,
            delay: '1',
        });
        MountAnimation.from(BottomText, {
            opacity: '0',
            duration: '0.8',
        });
        MountAnimation.from(LoadingIcon, {
            delay: '0.6',
            opacity: '0',
            duration: '0.01',
        });

        Component.append(LoadingIcon, BottomText, LoadingText);
        root.appendChild(Component);
        MountAnimation.play();
        LoadingTextAnimation.play();
};


const styles = {

    Component: `
        z-index: 10000;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        top: 35vh;
        margin-top: 57px;`,

    body: `
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;`,

    _border1: `
        position: absolute;`,
    
    _border2: `
        position: absolute;`,
    text: `
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 100%;
        position: absolute;
        top: 0px;`,
    value: `
        opacity: 0;
        color: black;
        font-size: 16px;
        text-align: center;
        line-height: 1.4`,

};

function Title(title) {

    const body = document.createElement('div');
    body.style = styles.body;

    const _border1 = document.createElement('div');
    _border1.style = styles._border1;

    const _border2 = document.createElement('div');
    _border2.style = styles._border2;

    const text = document.createElement('div');
    text.style = styles.text;

    const value = document.createElement('div');
    value.style = styles.value;

    text.appendChild(value)
    body.appendChild(text);
    body.appendChild(_border1);
    body.appendChild(_border2);

    const Component = document.createElement('div');
    Component.style = styles.Component;

    Component.appendChild(body);
    Component.id = '__Title';

    const TargetWidth = '330px';
    const TargetHeight = '53px';

    const mount = gsap.timeline();
    mount.to(body, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    });
    mount.to(body, {
        width: TargetWidth,
        height: TargetHeight,
        duration: '0.3',
        ease: 'steps(6)',
    });
    mount.to(_border1, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border1, {
        width: TargetWidth,
        height: TargetHeight,
        duration: '0.3',
        ease: 'steps(6)',
    }, '<');
    mount.to(_border2, {
        width: '50px',
        height: '20px',
        border: '1px solid white',
        duration: '0',
    }, '<+0.2');
    mount.to(_border2, {
        width: TargetWidth,
        height: TargetHeight,
        duration: '0.3',
        ease: 'steps(6)',
    }, '<');
    mount.to(text, {
        height: '100%',
        duration: '0.3',
        ease: 'steps(3)'
    });
    mount.to(value, {
        opacity: '1',
        duration: '0',
        text: {
            value: `${title}`,
        },
    });
    mount.to(value, {
        delay: '0.1',
        duration: '0',
        opacity: '0',
    });
    mount.to(value, {
        delay: '0.1',
        duration: '0',
        opacity: '1',
    });

    mount.to(_border1, {
        border: 'none',
        duration: '0',
    });
    mount.to(_border2, {
        border: 'none',
        duration: '0',
    });
    mount.to(value, {
        color: 'transparent',
        delay: '4',
        duration: '0',
    });
    mount.to(body, {
        delay: '0',
        duration: '0.4',
        ease: 'steps(3)',
        height: '0px',
        transformOrigin: 'top',
    });
    mount.to(body, {
        width: '0px',
        duration: '0.12',
        ease: 'steps(3)',
    });
    mount.to(Component, {
        delay: '0',
        duration: '0',
        opacity: '0',
    });
    mount.eventCallback('onComplete', ()=>{
        Component.remove();
    });

    return Component
};