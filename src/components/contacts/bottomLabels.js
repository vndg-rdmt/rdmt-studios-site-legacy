import gsap from "gsap";

export default function BottomLabels() {

    const Component = document.createElement('div');
    Component.style = `
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        `;
    
    const labelsContainer = document.createElement('div');
    labelsContainer.style = `
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 40vw;
        min-width: 800px;
        max-width: 930px;
        `;
    
    const left = document.createElement('img');
    left.src = new URL('./assets/copyright.svg', import.meta.url);

    const right = document.createElement('div');
    right.style = `
        width: 219px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;`;

    {
        const left = document.createElement('img');
        left.src = new URL('./assets/ARCHIVE_KEYS.svg', import.meta.url);
        right.appendChild(left);
    };
    {
        const left = document.createElement('img');
        left.src = new URL('./assets/AULABEL_RDMT.svg', import.meta.url);
        right.appendChild(left);
    };

    labelsContainer.append(left, right);

    const bottomLabel = document.createElement('div');
    bottomLabel.style = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 9px;`;
    {
        const bottomIcon = document.createElement('img');
        bottomIcon.src = new URL('./assets/MALAGRANATUM.png', import.meta.url);
        bottomIcon.style = `
            width: 50px;`;
        bottomLabel.appendChild(bottomIcon);
    };
    {
        const labelsContainer = document.createElement('div');
        labelsContainer.style = `
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;`;

        {
            const firstLabel = document.createElement('div');
            firstLabel.textContent = 'LIMBO DE GRACE';
            firstLabel.className = 'tms_reg';
            firstLabel.style = `
                font-size: 19px;
                color: white;`;
            labelsContainer.appendChild(firstLabel);
        }
        {
            const secondLabel = document.createElement('div')
            secondLabel.textContent = 'VINCENTO MORI';
            secondLabel.className = 'tms_reg';
            secondLabel.style = `
                font-size: 13px;
                color: white;`;
            labelsContainer.appendChild(secondLabel);
        }
        bottomLabel.appendChild(labelsContainer);
    };

    const mount = gsap.timeline({delay: '2.4'});
    mount.from(Component, {
        opacity: '0',
        duration: '1',
    })


    Component.append(labelsContainer, bottomLabel);

    return Component
}