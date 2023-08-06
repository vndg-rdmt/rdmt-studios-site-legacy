import Configuration from "./configuration.js";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const change_cell = new CustomEvent('change_cell');
const change_header = new CustomEvent('change_header');

import Loading_Icon from "../components/utils/Current_Icon.js";

// Change in OpenInfo() where to receive data.
// Add State.Opened_Header.

const State = {

    about: {

        Manifest: null,
        ManifestPage: null,
    },

    utils: {

        ConnectAPI(Component, type) {
            
            this.pointer_api.dispatchEvent(new CustomEvent(type, {
                detail: {
                    target: Component,
                },
            }));
        },

        pointer_api: null,
    },
    
    library: {
        
        Header: null,       // Current opened 'Header'
        List: null,         // Current opened cell in 'List'

        Listing: null,      // Pointer to 'Listing' component
        Info: null,         // Pointer to 'Info' component

        Grab_Data: null,
        Opened_List: null,
    },

    repository: {

        Card: undefined,    // Card component. Display configuration

        Current_Cell: undefined,    // Last clicked `Button`

        Fill(node) {

            if (this.Current_Cell) {
                this.Current_Cell.className = 'button';
            }

            this.Current_Cell = node;
            this.Current_Cell.className = 'active';

            let grab = Configuration.repository[node.getAttribute('data')];

            if (!grab) {
                grab = {
                    _id: '....',
                    _spec: 'BAD GATEWAY<br>NO DATA',
                }
            }
            this.Card.dispatchEvent(new CustomEvent('render_info', {
                detail: {
                    none: true,
                    id: grab._id,
                    spec: grab._spec
                }
            }));
        },
    },

    OpenCell(Component) {
        if (this.library.List) {
            this.library.List.className = 'white_text';
            this.library.List.removeChild(Loading_Icon);
        };

        this.library.List = Component;
        Component.className = 'active';
        this.library.List.appendChild(Loading_Icon);

        this.library.Opened_List = Component.getAttribute('data');
        State.library.Info.dispatchEvent(change_cell);
    },

    OpenHeader(Component) {
        if (this.library.Header) {
            this.library.Header.className = 'white_text';
        };

        this.library.Header = Component;
        Component.className = 'active';

        this.library.Grab_Data = Component.getAttribute('data');
        State.library.Listing.dispatchEvent(change_header);
        State.library.Info.dispatchEvent(change_cell);

    },

    OpenInfo(_title, _text, _data, Component) {

        let temp_title, temp_body, temp_data;
        const temp_path = Configuration.library[State.library.Grab_Data][State.library.Opened_List];
        
        if (temp_path._title) {
            temp_title = temp_path._title;
        } else { temp_title = '.....'; };
        
        if (temp_path._body) {
            temp_body = temp_path._body;
        } else { temp_body = 'CONNECTION LOST' }

        if (temp_path._data) {
            temp_data = temp_path._data;
        } else { temp_data = '00.00.00'};

        _title.textContent = '';
        _text.textContent = '';
        _data.textContent = '';

        const render_text = gsap.timeline();

        function KillProc() {
            Component.removeEventListener('change_cell', KillProc);
            render_text.kill();    
        };

        Component.addEventListener('change_cell', KillProc);

        render_text.to(_title, {
            duration: '0.5',
            text: {
                value: temp_title,
            },
        });
        render_text.to(_text, {
            duration: `${temp_body.length * 0.04}`,
            text: {
                value: temp_body,
            },
            ease: 'power2.out',
        });
        render_text.to(_data, {
            duration: '0.7',
            text: {
                value: temp_data,
            },
            ease: 'power2.out',
        }, '<');
        render_text.eventCallback('onComplete', () => {
            Component.removeEventListener('change_cell', KillProc);
        })
    },

    SubTo(Prop, Component, event, func) {
        Component.addEventListener(event, func);
        State.library[Prop] = Component;
    },

};

export default State;